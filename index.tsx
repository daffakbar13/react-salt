import * as React from 'react';
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import {
//   useQuery,
//   useMutation,
//   useQueryClient,
//   QueryClient,
//   QueryClientProvider,
// } from 'react-query'

import App from './@salt/app';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);
// const queryClient = new QueryClient()

root.render(
  <StrictMode>
    {/* <QueryClientProvider client={queryClient}> */}
    <App />
    {/* </QueryClientProvider> */}
  </StrictMode>
);
