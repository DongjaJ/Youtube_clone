import React from 'react';
import VideoDetail from '../components/VideoDetail';
import RelatedVideos from '../components/RelatedVideos';

export default function Watch() {
  return (
    <div className="md:flex">
      <VideoDetail />
      <RelatedVideos />
    </div>
  );
}
