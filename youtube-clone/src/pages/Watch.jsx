import React from 'react';
import VideoDetail from '../components/VideoDetail';
import RelatedVideos from '../components/RelatedVideos';
import { useLocation } from 'react-router-dom';

export default function Watch() {
  const {
    state: { video },
  } = useLocation();
  return (
    <div className="flex flex-col lg:flex-row">
      <VideoDetail video={video} />
      <section className="basis-2/6">
        <RelatedVideos id={video.id} />
      </section>
    </div>
  );
}
