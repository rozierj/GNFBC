
import React, { useEffect, useState } from "react";
import "./MediaGallery.css"; // Custom styles for transitions

// Dynamically import all media files from /src/assets/media
const importAll = (r) =>
  r.keys().map((key) => ({
    src: r(key),
    name: key.replace('./', ''),
  }));

const allMedia = importAll(
  require.context('../assets/media', false, /\.(mp4|webm|jpg|jpeg|png|gif)$/)
);

// Identify intro video and fallback image
const introVideo = allMedia.find((file) => file.name === "intro.mp4");
const fallbackImage = allMedia.find((file) => file.name === "intro-fallback.jpg");

// Prepare loop list: intro + all other media (excluding fallback)
const rotationMedia = introVideo
  ? [introVideo, ...allMedia.filter((file) => !["intro.mp4", "intro-fallback.jpg"].includes(file.name))]
  : allMedia.filter((file) => file.name !== "intro-fallback.jpg");

export default function MediaGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let timeout;
    setFade(true);

    timeout = setTimeout(() => {
      setFade(false);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % rotationMedia.length);
    }, currentIndex === 0 ? 15000 : 8000); // longer for intro

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  const currentFile = rotationMedia[currentIndex];
  const isVideo = /\.(mp4|webm)$/i.test(currentFile?.name || "");

  const renderMedia = () => {
    if (!currentFile) return null;

    return isVideo ? (
      <video
        src={currentFile.src}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-contain"
        poster={currentIndex === 0 && fallbackImage ? fallbackImage.src : ""}
      />
    ) : (
      <img
        src={currentFile.src}
        alt={`media-${currentIndex}`}
        className="w-full h-full object-contain"
      />
    );
  };

  return (
    <section className="p-8 bg-purple-50 text-purple-900">
      <h2 className="text-2xl font-bold mb-4 text-center">Visions of Greater</h2>
      <div className="w-full mx-auto rounded-xl max-w-4xl relative pb-[28.125%]">
        {/* Half of 56.25% padding (16:9) */}
        <div className={`transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 w-full h-full rounded-xl shadow-lg flex items-center justify-center bg-black">
            {renderMedia()}
          </div>
        </div>
      </div>
    </section>
  );
}
