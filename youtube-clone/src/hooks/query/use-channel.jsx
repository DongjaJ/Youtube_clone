import { useQuery } from '@tanstack/react-query';
import { API_KEY } from './hellper';

export default function useChannelQuery(channelId) {
  console.log('use channel query');
  return useQuery(
    ['channel', channelId],
    async () => {
      // const URI = `/data/channel.json`;
      const URI = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${API_KEY}`;
      const data = await fetch(URI).then((res) => res.json());
      console.log(data.items[0]);
      const channelInfo = {
        title: data.items[0].snippet.title,
        description: data.items[0].snippet.description,
      };
      return channelInfo;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );
}
