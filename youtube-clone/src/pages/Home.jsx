import React from 'react';
import VideoGallery from '../components/VideoGallery';
import usePopularListQuery from '../hooks/query/use-popular';

export default function Home() {
  const { data: videos, isLoading, error } = usePopularListQuery();

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && <VideoGallery videos={videos} />}
    </>
  );
}
