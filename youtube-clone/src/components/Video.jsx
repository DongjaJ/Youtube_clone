import React from 'react';
import { Link } from 'react-router-dom';

export default function Video({ video }) {
  const { id, thumbnail, title, channelTitle, time } = video;
  return (
    <div>
      <Link to={`/videos/watch/${id}`}>
        <img src={thumbnail} alt="thumbnail" className="w-full" />
      </Link>
      <section className="channel-info">
        <h2>{title}</h2>
        <h3>{channelTitle}</h3>
        <p>{time}</p>
      </section>
    </div>
  );
}
