@echo off
setlocal

echo === Backing up current package.json...
if not exist package.json (
  echo ❌ ERROR: package.json not found.
  pause
  exit /b
)
copy package.json package.dev.json /Y
if %ERRORLEVEL% NEQ 0 (
  echo ❌ ERROR: Failed to backup package.json
  pause
  exit /b
)

echo === Swapping in deploy config...
if not exist package.deploy.json (
  echo ❌ ERROR: package.deploy.json not found.
  pause
  exit /b
)
copy package.deploy.json package.json /Y
if %ERRORLEVEL% NEQ 0 (
  echo ❌ ERROR: Failed to apply deploy package.json
  pause
  exit /b
)

echo === Building and deploying to GitHub Pages...
npm run deploy
if %ERRORLEVEL% NEQ 0 (
  echo ❌ ERROR: npm run deploy failed.
  pause
  exit /b
)

echo === Restoring development package.json...
copy package.dev.json package.json /Y
if %ERRORLEVEL% NEQ 0 (
  echo ❌ ERROR: Failed to restore development package.json
  pause
  exit /b
)

echo === Cleaning up...
del package.dev.json

echo.
echo ✅ Deployment complete!
echo Visit: https://rozierj.github.io/GNFBC/

pause
