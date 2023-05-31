import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useSearchedListQuery(keyword) {
  return useQuery(
    ['search', keyword],
    async () => {
      console.log('fetching...');
      // const URI = `/data/search.json`;
      const URI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${keyword}&key=${API_KEY}`;
      const data = await fetch(URI).then((res) => res.json());
      const searchedList = data.items.map((item) => {
        const video = {
          id: item.id.videoId,
          thumbnail: item.snippet.thumbnails.default.url,
          title: item.snippet.title,
          channelTitle: item.snippet.channelTitle,
          channelId: item.snippet.channelId,
          description: item.snippet.description,
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
