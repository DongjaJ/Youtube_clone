import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ChannelContext } from '../context/ChannelContext';
import { useParams } from 'react-router-dom';

export default function VideoDetail() {
  const { channel } = useContext(ChannelContext);
  const { videoId } = useParams();
  const { data, isLoading, error } = useQuery(
    ['channel'],
    async () => {
      console.log('fetching...');
      const data = await fetch(`/data/channel.json`).then((res) => res.json());
      const channelInfo = {
        etag: data.items[0].etag,
        title: data.items[0].snippet.title,
        description: data.items[0].snippet.description,
      };

      return channelInfo;
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <section>
        <iframe
          width="790"
          height="444"
          src={`https://www.youtube.com/embed/${videoId}`}
          // title="말이 필요없다; 중간 이상가는 여름 남친룩 모음집"
          frameborder="0"
          allowfullscreen></iframe>
        <h1>{data.title}</h1>
        <h2>{channel}</h2>
        <p>{data.description}</p>
      </section>
    </div>
  );
}
