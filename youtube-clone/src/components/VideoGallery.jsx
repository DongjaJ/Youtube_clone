import React, { useContext } from 'react';
import Video from '../components/Video';
import { useQuery } from '@tanstack/react-query';

export function GalleryContainer({ children }) {
  return (
    <div className="w-8/12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-0">
      {children}
    </div>
  );
}

export function RelatedGalleryContainer({ children }) {
  return <div className="grid-cols-1">{children}</div>;
}

export function useSearchedListQuery() {
  return useQuery(
    ['search'],
    async () => {
      console.log('fetching...');
      const data = await fetch(`/data/search.json`).then((res) => res.json());
      const searchedList = data.items.map((item) => {
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
      console.log(searchedList);
      return searchedList;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}

export function usePopularListQuery() {
  return useQuery(
    ['popular'],
    async () => {
      const data = await fetch(`/data/popular.json`).then((res) => res.json());
      const popularList = data.items.map((item) => {
        const video = {
          id: item.id,
          thumbnail: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          time: item.snippet.publishedAt,
        };
        return video;
      });
      return popularList;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}

export default function VideoGallery({ videos }) {
  return (
    <>
      {videos.map((video) => (
        <div className="flex" key={video.id}>
          <Video video={video} />
        </div>
      ))}
    </>
  );
}
