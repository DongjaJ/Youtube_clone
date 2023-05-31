import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VideoContextProvider from '../context/VideoContext';

export default function Root() {
  return (
    <div className="flex flex-col justify-center items-center bg-slate-900">
      <Navbar />
      <VideoContextProvider>
        <Outlet />
      </VideoContextProvider>
    </div>
  );
}
