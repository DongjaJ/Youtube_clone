import React, { createContext, useState } from 'react';

export const ChannelContext = createContext();

export default function ChannelProvider({ children }) {
  const [channel, setChannel] = useState('');
  return (
    <div>
      <ChannelContext.Provider value={{ channel, setChannel }}>
        {children}
      </ChannelContext.Provider>
    </div>
  );
}
