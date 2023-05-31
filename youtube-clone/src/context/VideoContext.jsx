import React, { createContext, useState } from 'react';

export const VideoContext = createContext();

export default function VideoContextProvider({ children }) {
  const [videoInfo, setVideoInfo] = useState({});
  return (
    <div>
      <VideoContext.Provider value={{ videoInfo, setVideoInfo }}>
        {children}
      </VideoContext.Provider>
    </div>
  );
}
