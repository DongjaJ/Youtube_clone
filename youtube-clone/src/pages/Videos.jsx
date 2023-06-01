import React from 'react';
import VideoGallery from '../components/VideoGallery';
import useSearchedListQuery from '../hooks/query/use-search';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const { data: videos, isLoading, error } = useSearchedListQuery(keyword);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && <VideoGallery videos={videos} />}
    </>
  );
}
