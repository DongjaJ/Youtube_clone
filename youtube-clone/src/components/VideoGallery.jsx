import React from 'react';
import Video from '../components/Video';

export function GalleryContainer({ children }) {
  return (
    <div className="w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
      {children}
    </div>
  );
}

export function RelatedGalleryContainer({ children }) {
  return (
    <div className="w-8/12 mt-6 md:w-2/12 md:mt-0 md:ml-1">{children}</div>
  );
}

export default function VideoGallery({ videos }) {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 gap-2 gap-y-4">
      {videos.map((video) => (
        <div key={video.id}>
          <Video video={video} />
        </div>
      ))}
    </ul>
  );
}
