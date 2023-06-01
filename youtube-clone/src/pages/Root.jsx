import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import VideoContextProvider from '../context/VideoContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

export default function Root() {
  return (
    <>
      <Navbar />
      <QueryClientProvider client={queryClient}>
        <VideoContextProvider>
          <Outlet />
        </VideoContextProvider>
      </QueryClientProvider>
    </>
  );
}
