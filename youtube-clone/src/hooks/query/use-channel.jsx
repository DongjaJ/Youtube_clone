import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useChannelQuery(channelId) {
  console.log('use channel query');
  return useQuery(
    ['channel', channelId],
    async () => {
      const URI = `/data/channel.json`;
      // const URI = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
      return fetch(URI)
        .then((res) => res.json())
        .then((data) => data.items[0].snippet.thumbnails.default.url);
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
