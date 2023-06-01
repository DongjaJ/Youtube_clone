import React from 'react';
import VideoGallery from '../components/VideoGallery';
import usePopularListQuery from '../hooks/query/use-popular';
import Video from '../components/Video';

export default function Home() {
  const { data: videos, isLoading, error } = usePopularListQuery();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <div key={video.id}>
              <Video video={video} />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
