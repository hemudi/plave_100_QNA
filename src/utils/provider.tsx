// https://codevoweb.com/setup-react-query-in-nextjs-13-app-directory/
'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const [client] = useState(new QueryClient());
  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
