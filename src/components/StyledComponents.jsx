import styled from "styled-components";

export const StyledComponents = () => {
  return (
    <SContainer>
      <STitle>- Styled Components -</STitle>
      <SButton>Amazing!</SButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  border: solid 2px orange;
  border-radius: 8px;
  padding: 8px;
  margin: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const STitle = styled.p`
  margin: 0;
  color: #ff0000;
`;
const SButton = styled.button`
  background-color: pink;
  border: none;
  padding: 8px;
  border-radius: 8px;
`;
