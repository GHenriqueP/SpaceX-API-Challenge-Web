import { styled } from "styled-components";

export const GraphicsContainer = styled.section`
  width: 100%;
  height: 15rem;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  margin-top: 2rem;
`;



export const GraphicCard = styled.div`
  background: ${props => props.theme["gray-600"]};
  border-radius: 6px;
  padding: 1rem;
  width: 100%;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${props => props.theme["gray-300"]};
  }


`;