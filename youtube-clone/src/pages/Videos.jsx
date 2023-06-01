import React from 'react';
import useSearchedListQuery from '../hooks/query/use-search';
import { useParams } from 'react-router-dom';
import Video from '../components/Video';

export default function Videos() {
  const { keyword } = useParams();
  const { data: videos, isLoading, error } = useSearchedListQuery(keyword);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something happened</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <div key={video.id}>
              <Video video={video} />
            </div>
          ))}
        </ul>
      )}
    </>
  );
}
