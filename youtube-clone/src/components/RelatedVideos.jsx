import React from 'react';
import useRelatedQuery from '../hooks/query/use-related';
import Video from './Video';

export default function RelatedVideos({ id }) {
  const { data: videos, isLoading, error } = useRelatedQuery(id);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <div key={video.id.videoId}>
              <Video video={video} type="list" />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
