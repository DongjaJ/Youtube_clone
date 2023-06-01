import React from 'react';
import VideoGallery, { GalleryContainer } from '../components/VideoGallery';
import usePopularListQuery from '../hooks/query/use-popular';

export default function Home() {
  const { data: videos, isLoading, error } = usePopularListQuery();

  return (
    <div className="flex justify-center">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {videos && (
        <GalleryContainer>
          <VideoGallery videos={videos} />
        </GalleryContainer>
      )}
    </div>
  );
}
