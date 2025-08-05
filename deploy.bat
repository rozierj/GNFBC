@echo off
setlocal

:: === SAFETY CHECK: Verify package-lock.json is in sync with package.json ===
echo Checking if package-lock.json is in sync with package.json...
call npm install --package-lock-only >nul 2>&1
IF ERRORLEVEL 1 (
    echo ERROR: package-lock.json is out of sync with package.json.
    echo Please run: npm install
    endlocal
    pause
    exit /b 1
)

:: === VERSION GUARD: Ensure react-router-dom is locked to 6.28.0 in all package files ===
set "EXPECTED_VERSION=6.28.0"

for %%F in (package.json package.deploy.json package.dev.json) do (
    echo Checking %%F for react-router-dom@%EXPECTED_VERSION%...
    findstr /C:"\"react-router-dom\": \"%EXPECTED_VERSION%\"" %%F >nul
    IF ERRORLEVEL 1 (
        echo ERROR: %%F does not have react-router-dom@%EXPECTED_VERSION%.
        echo Please update %%F before deploying.
        endlocal
        pause
        exit /b 1
    )
)

:: Also check installed version in node_modules
for /f "delims=" %%v in ('npm ls react-router-dom --depth=0 --json ^| findstr /i "%EXPECTED_VERSION%"') do set foundVersion=%%v
if not defined foundVersion (
    echo ERROR: Installed react-router-dom is not version %EXPECTED_VERSION%.
    echo Please fix with: npm install react-router-dom@%EXPECTED_VERSION% react-router@%EXPECTED_VERSION%
    endlocal
    pause
    exit /b 1
)

echo === Backing up current package.json...
copy package.json package.dev.json >nul

echo === Swapping in deploy config...
copy package.deploy.json package.json >nul

echo === Copying SEO files to public folder (if available)...
if exist google*.html copy google*.html public\ >nul
if exist robots.txt copy robots.txt public\ >nul
if exist sitemap.xml copy sitemap.xml public\ >nul

echo === Installing dependencies fresh with npm ci...
call npm ci
IF ERRORLEVEL 1 (
    echo ERROR: npm ci failed. Aborting deploy.
    endlocal
    pause
    exit /b 1
)

echo === Building and deploying to GitHub Pages...
echo Running npm run deploy...
call npm run deploy > deploy-log.txt 2>&1
IF ERRORLEVEL 1 (
    echo ERROR: npm run deploy failed. Check deploy-log.txt for details.
    endlocal
    pause
    exit /b 1
)

echo.
echo === DEPLOYMENT LOG SUMMARY ===
echo Git Branch:
call git branch --show-current
echo.
echo Last Commit Deployed:
call git log -1 --oneline
echo.
echo Full deployment log saved to deploy-log.txt
echo.

echo === Restoring original package.json...
copy package.dev.json package.json >nul

echo === Reinstalling local dependencies with npm ci...
call npm ci
IF ERRORLEVEL 1 (
    echo WARNING: npm ci failed after restore. You may need to run manually.
)

echo === Deploy complete!
endlocal
pause
