import React from 'react';
import useChannelQuery from '../hooks/query/use-channel';

export default function Channel({ id, name }) {
  const { data: url } = useChannelQuery(id);
  console.log(url);
  return (
    <div className="flex my-4 mb-8 items-center">
      {url && (
        <img className="w-10 h-10 rounded-full mr-2" src={url} alt="name"></img>
      )}
      <p className="text-lg font-medium">{name}</p>
    </div>
  );
}
