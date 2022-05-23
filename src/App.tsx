import './App.css';
import Styled from 'styled-components';
import Main from './pages/MainPage';
import { QueryClient, QueryClientProvider } from 'react-query';
import { GlobalProvider } from 'context/GlobalContext';

// - 지역 리스트는 hard coding
//   - 지역이름, 좌표값
// - 페이지 랜딩시 현 시간, 특정 지역 날씨 정보 보여주기
// - 랜딩페이지 -> 지역 리스트 클릭 했을 때 날씨 정보 갱신
// *******
// - 지역 추가
//   - 각자의 방식으로 저장
// - 지역 삭제

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <div className="App">
          <FlexContainer>
            <Main />
          </FlexContainer>
        </div>
      </GlobalProvider>
    </QueryClientProvider>
  );
}

const FlexContainer = Styled.div`
  display: flex;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  font-size: calc(10px + 2vmin);
  color: white;
`;

export default App;
