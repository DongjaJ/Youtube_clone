import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useRelatedQuery(id) {
  return useQuery(
    ['related', id],
    async () => {
      // const URI = `/data/related.json`;
      const URI = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=25&key=${API_KEY}`;
      const data = await fetch(URI).then((res) => res.json());
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
      console.log('related'.relatedList);
      return relatedList;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
