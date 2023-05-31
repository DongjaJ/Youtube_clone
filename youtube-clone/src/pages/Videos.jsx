import React from 'react';
import VideoGallery, { GalleryContainer } from '../components/VideoGallery';
import useSearchedListQuery from '../hooks/query/use-search';
import { useParams } from 'react-router-dom';

export default function Videos() {
  const { keyword } = useParams();
  const { data: videos, isLoading, error } = useSearchedListQuery(keyword);
  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;
  return (
    <div className="flex justify-center">
      <GalleryContainer>
        <VideoGallery videos={videos} />
      </GalleryContainer>
    </div>
  );
}
