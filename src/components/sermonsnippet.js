import React from "react";

const sermonData = {
  title: "June 2025 Sermon Clip",
  youtubeURL: "https://www.youtube.com/watch?v=_9Vr9nOrmhQ",
  startSeconds: 2282,
  endSeconds: 2406,
};

function extractVideoId(url) {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

const SermonSnippet = () => {
  const videoId = extractVideoId(sermonData.youtubeURL);
  if (!videoId) return <p>Invalid YouTube URL</p>;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${sermonData.startSeconds}&end=${sermonData.endSeconds}&autoplay=0&mute=0&rel=0`;

  return (
<section className="p-8 bg-purple-50 text-purple-900">
  <h2 className="text-2xl font-bold mb-4 text-center">{sermonData.title}</h2>
  <div className="w-full mx-auto rounded-xl overflow-hidden flex justify-center items-center">
    <div className="w-full max-w-4xl aspect-video">
      <iframe
        src={embedUrl}
        title="Pastor's Sermon Snippet"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full rounded-xl"
      ></iframe>
    </div>
  </div>
</section>

  );
};

export default SermonSnippet;
