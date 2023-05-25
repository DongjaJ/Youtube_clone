import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ChannelProvider from '../context/ChannelContext';

export default function Root() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Navbar />
      <ChannelProvider>
        <Outlet />
      </ChannelProvider>
    </div>
  );
}
