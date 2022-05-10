import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

import useWeather from 'hooks/useWeather';

describe('useQuery', () => {
  it('fetch', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result, waitFor } = renderHook(() => useWeather('London'), { wrapper });
    await waitFor(() => result.current.isSuccess);
    // expect(result.current.data).toEqual('London');
  });
});
