import React from 'react';
import VideoGallery, { GalleryContainer } from '../components/VideoGallery';
import { usePopularListQuery } from '../components/VideoGallery';

export default function Home() {
  const { data: videos, isLoading, error } = usePopularListQuery();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error}</p>;
  return (
    <GalleryContainer>
      <VideoGallery videos={videos} />
    </GalleryContainer>
  );
}
