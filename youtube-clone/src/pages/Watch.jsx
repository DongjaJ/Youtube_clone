import React from 'react';
import VideoDetail from '../components/VideoDetail';
import RelatedVideos from '../components/RelatedVideos';

export default function Watch() {
  return (
    <div className="flex">
      <VideoDetail />
      <RelatedVideos />
    </div>
  );
}
