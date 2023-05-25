import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChannelContext } from '../context/ChannelContext';

export default function Video({ video }) {
  const { id, thumbnail, title, channelTitle, time, channelId } = video;
  const { setChannel } = useContext(ChannelContext);

  function handleClick() {
    setChannel(channelId);
  }

  return (
    <div>
      <Link to={`/videos/watch/${id}`} onClick={handleClick}>
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
