import React from 'react';
import VideoGallery, { GalleryContainer } from '../components/VideoGallery';
import usePopularListQuery from '../hooks/query/use-popular';

export default function Home() {
  const { data: videos, isLoading, error } = usePopularListQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <div className="flex justify-center">
      <GalleryContainer>
        <VideoGallery videos={videos} />
      </GalleryContainer>
    </div>
  );
}
