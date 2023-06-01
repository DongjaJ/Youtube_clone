import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useRelatedQuery(id) {
  return useQuery(
    ['related', id],
    async () => {
      const URI = `/data/related.json`;
      // const URI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=25&key=${API_KEY}`;
      return fetch(URI)
        .then((res) => res.json())
        .then((data) => data.items);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
