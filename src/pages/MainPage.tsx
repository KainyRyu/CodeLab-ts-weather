import Styled from 'styled-components';

export default function Main() {
  return (
    <Flex>
      <h1>Selected</h1>
    </Flex>
  );
}

const Flex = Styled.div`
  display: flex;
  flex-flow: column;
`;
