import { styled } from "styled-components";

export const GraphicsContainer = styled.section`
  display: flex;
  flex-direction: row;
  width: 100%;
  min-height: 15rem;
  height: auto;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  gap: 2rem;
  margin-top: 2rem;
  overflow-x: auto;
  @media (max-width: 780px) {
  flex-direction: column;
  }
`;



export const GraphicCard = styled.div`
  background: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 1rem;
  width: 100%;
  overflow-x: auto;
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }


`;