import React from 'react';
import Videogallery, { RelatedGalleryContainer } from './VideoGallery';
import { useQuery } from '@tanstack/react-query';

export default function RelatedVideos() {
  const {
    data: videos,
    isLoading,
    error,
  } = useQuery(
    ['popular'],
    async () => {
      const data = await fetch(`/data/related.json`).then((res) => res.json());
      const relatedList = data.items.map((item) => {
        const video = {
          id: item.id.videoId,
          thumbnail: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          time: item.snippet.publishedAt,
        };
        return video;
      });
      return relatedList;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <RelatedGalleryContainer>
      <Videogallery videos={videos} />
    </RelatedGalleryContainer>
  );
}
