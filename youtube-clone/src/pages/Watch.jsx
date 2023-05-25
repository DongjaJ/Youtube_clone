import React from 'react';
import VideoDetail from '../components/VideoDetail';
import RelatedVideos from '../components/RelatedVideos';

export default function Watch() {
  return (
    <div className="w-full flex flex-col md:flex-row justify-center mt-2">
      <VideoDetail />
      <RelatedVideos />
    </div>
  );
}
