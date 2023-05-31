import React from 'react';
import Videogallery, { RelatedGalleryContainer } from './VideoGallery';
import useRelatedQuery from '../hooks/query/use-related';
import { useParams } from 'react-router-dom';

export default function RelatedVideos() {
  const { videoId } = useParams();
  const { data: videos, isLoading, error } = useRelatedQuery(videoId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <RelatedGalleryContainer>
      <Videogallery videos={videos} />
    </RelatedGalleryContainer>
  );
}
