import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function usePopularListQuery() {
  return useQuery(
    ['popular'],
    async () => {
      const URI = '/data/popular.json';
      // const URI = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${API_KEY}`;
      return fetch(URI)
        .then((res) => res.json())
        .then((data) => data.items);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
