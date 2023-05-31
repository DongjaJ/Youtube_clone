import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function usePopularListQuery() {
  return useQuery(
    ['popular'],
    async () => {
      // const URI = '/data/popular.json';
      const URI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`;
      const data = await fetch(URI).then((res) => res.json());
      const popularList = data.items.map((item) => {
        const video = {
          id: item.id,
          thumbnail: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          description: item.snippet.description,
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
