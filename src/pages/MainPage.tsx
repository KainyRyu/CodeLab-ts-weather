import CurrentWeather from 'components/CurrentWeather';
import Styled from 'styled-components';

export default function Main() {
  return (
    <Flex>
      <div>Here, Now</div>
      <CurrentWeather location="London" degrees={30} />
    </Flex>
  );
}

const Flex = Styled.div`
  display: flex;
  flex-flow: column;
`;
