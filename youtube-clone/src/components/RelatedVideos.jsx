import React from 'react';
import useRelatedQuery from '../hooks/query/use-related';
import Video from './Video';

export default function RelatedVideos({ id }) {
  const { data: videos, isLoading, error } = useRelatedQuery(id);

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && (
        <ul className="">
          {videos.map((video) => (
            <div key={video.id}>
              <Video video={video} type="list" />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
