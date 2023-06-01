import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useSearchedListQuery(keyword) {
  return useQuery(
    ['search', keyword],
    async () => {
      console.log('fetching...');
      const URI = `/data/search.json`;
      // const URI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`;
      return fetch(URI)
        .then((res) => res.json())
        .then((data) =>
          data.items.map((item) => ({ ...item, id: item.id.videoId }))
        );
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
