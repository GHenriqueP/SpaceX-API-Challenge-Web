import styled from "styled-components";

export const HeaderContainer = styled.header`
  background: ${props => props.theme["gray-900"]};
  padding: 1rem  2.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0;

  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  color: ${props => props.theme["gray-300"]};
  padding-left: 0.5rem;
`