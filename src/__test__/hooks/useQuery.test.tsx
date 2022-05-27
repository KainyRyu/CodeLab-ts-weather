import { QueryClient, QueryClientProvider } from 'react-query';
import { renderHook } from '@testing-library/react-hooks';

import useWeather from 'hooks/useWeather';

interface Props {
  children: JSX.Element | JSX.Element[];
}

describe('useQuery', () => {
  it('fetches weatherAPI correctly', async () => {
    const queryClient = new QueryClient();
    const wrapper = ({ children }: Props) => (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
    const { result, waitFor } = renderHook(() => useWeather('london'), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data.name).toEqual('London');
  });
});
