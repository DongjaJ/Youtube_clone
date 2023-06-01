import React from 'react';
import Channel from './Channel';

export default function VideoDetail({ video }) {
  const { title, channelId, channelTitle, description } = video.snippet;

  return (
    <section className="basis-4/6">
      <iframe
        width="100%"
        height="640"
        src={`https://www.youtube.com/embed/${video.id}`}
        allowFullScreen
        title={title}
      />
      <div className="p-8">
        <h1 className="text-xl font-bold">{title}</h1>
        <Channel id={channelId} name={channelTitle}></Channel>
        <pre className="white-pre-wrap">{description}</pre>
      </div>
    </section>
  );
}
