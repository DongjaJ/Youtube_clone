import React from 'react';
import VideoGallery from '../components/VideoGallery';
// import { useParams } from 'react-router-dom';
import { useSearchedListQuery } from '../components/VideoGallery';

export default function Videos() {
  // const { keyword } = useParams();
  const { data: videos, isLoading, error } = useSearchedListQuery();
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return <VideoGallery videos={videos} />;
}
