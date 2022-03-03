import Styled from 'styled-components';

export default function List() {
  return (
    <StyledList>
      {/* {CITIES.map(({ location }) => {
        return <StyledButton name={location}>{location}</StyledButton>;
      })} */}
    </StyledList>
  );
}

const StyledList = Styled.div`
  display: flex;
  flex-flow: column;
  padding-top: 50px;
`;

const StyledButton = Styled.button`
  margin: 10px;
`;
