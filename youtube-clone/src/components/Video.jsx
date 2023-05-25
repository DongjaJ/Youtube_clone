import React from 'react';
import { Link } from 'react-router-dom';

export default function Video() {
  return (
    <div>
      <Link to="/videos/watch/bts">
        <img
          src="https://i.ytimg.com/vi/ehfQMjbQn9o/default.jpg"
          alt="thumbnail"
          className="w-full"
        />
      </Link>
      <section className="channel-info">
        <h2>Video Title</h2>
        <h3>channelTitle</h3>
        <p>1 day ago</p>
      </section>
    </div>
  );
}
