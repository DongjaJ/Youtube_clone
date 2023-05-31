import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import useChannelQuery from '../hooks/query/use-channel';
import { VideoContext } from '../context/VideoContext';

export default function VideoDetail() {
  const { videoInfo } = useContext(VideoContext);
  console.log(videoInfo);
  const { videoId } = useParams();
  const { data, isLoading, error } = useChannelQuery(videoInfo.channelId);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <section className="w-8/12 md:w-8/12">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        allowFullScreen
        className="w-full h-96"></iframe>
      <h1 className="text-white font-bold">{videoInfo.title}</h1>
      <h2 className="text-slate-400">{data.title}</h2>
      <p className="text-slate-400">{data.description}</p>
    </section>
  );
}
