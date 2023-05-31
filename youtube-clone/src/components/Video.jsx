import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { VideoContext } from '../context/VideoContext';

export default function Video({ video }) {
  const { id, thumbnail, title, channelTitle, time, channelId } = video;
  const { setVideoInfo } = useContext(VideoContext);

  function handleClick() {
    setVideoInfo({ title, channelId });
  }

  return (
    <div className="w-full">
      <Link to={`/videos/watch/${id}`} onClick={handleClick}>
        <img src={thumbnail} alt="thumbnail" className="w-full" />
      </Link>
      <section className="channel-info">
        <h2 className="text-white font-bold">{title}</h2>
        <h3 className="text-slate-400">{channelTitle}</h3>
        <p className="text-slate-400">{time}</p>
      </section>
    </div>
  );
}
