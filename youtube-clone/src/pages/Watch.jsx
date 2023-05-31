import React from 'react';
import VideoDetail from '../components/VideoDetail';
import RelatedVideos from '../components/RelatedVideos';

export default function Watch() {
  return (
    <div className="flex flex-col justify-center md:flex-row items-center md:items-start mt-2 w-full">
      <VideoDetail />
      <RelatedVideos />
    </div>
  );
}
