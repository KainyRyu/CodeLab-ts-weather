import { render, waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import SelectedCity from 'components/SelectedCity';
import { GlobalProvider } from 'context/GlobalContext';
import useWeather from 'hooks/useWeather';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

interface Props {
  children: JSX.Element | JSX.Element[];
}

describe('<SelectedCity />', () => {
  it('renders component correctly', () => {
    const { container } = render(<SelectedCity selectedCity="seoul" />);

    expect(container).toMatchSnapshot();
  });

  it("display seoul's weather", async () => {
    const wrapper = ({ children }: Props) => {
      const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
          }
        }
      });
      return (
        <QueryClientProvider client={queryClient}>
          <GlobalProvider>
            <SelectedCity selectedCity="seoul" />
          </GlobalProvider>
        </QueryClientProvider>
      );
    };

    const { result, waitFor } = renderHook(() => useWeather('seoul'), { wrapper });
    await waitFor(() => result.current.isSuccess);
    expect(result.current.data.name).toEqual('Seoul');
  });

  // it('displays not found message', async () => {
  //   const wrapper = ({ children }: Props) => {
  //     const queryClient = new QueryClient({
  //       defaultOptions: {
  //         queries: {
  //           retry: false,
  //         },
  //       },
  //     });
  //     return (
  //       <QueryClientProvider client={queryClient}>
  //         <GlobalProvider>
  //           <SelectedCity selectedCity="abc" />
  //         </GlobalProvider>
  //       </QueryClientProvider>
  //     );
  //   };

  //   const { result, waitFor } = renderHook(() => useWeather('abc'), { wrapper });
  //   await waitFor(() => result.current.isError);
  //   expect(result).toEqual('Seoul');
  // });
});
