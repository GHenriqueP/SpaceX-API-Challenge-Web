import styled from "styled-components";

export const Container = styled.div`
  width: auto;
  margin-top: -3rem;
`

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 6px;
    border: 0;
    background: ${props => props.theme["gray-900"]};
    color: ${props => props.theme["gray-300"]};
    padding: 1rem;

    &::placeholder {
      color: ${props => props.theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    
    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${props => props.theme["green-300"]};
    color: ${props => props.theme["green-300"]};
    font-weight: bold;
    border-radius: 6px;

    &:hover {
      background: ${props => props.theme["green-500"]};
      border-color: ${props => props.theme["green-500"]};
      color: ${props => props.theme.white};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }
`;

export const LaunchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem 1rem;
  width: 100%;
  height: auto;
  border-radius: 0.5rem;
  background: ${props => props.theme["gray-600"]};
  overflow: auto;
`

export const LaunchesTable = styled.table`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0 0.5rem;
    border-radius: 0.5rem;
`;

export const LaunchesThead = styled.thead`
    font: 700 1rem Roboto, sans-serif;
    color: ${props => props.theme['gray-100']};
`;

export const LaunchesTbody = styled.tbody`
    margin-top: 1rem;
`;

export const LaunchesTh = styled.th`
    background: ${props => props.theme["gray-600"]};

    text-align: center;
`;

export const LaunchesTr = styled.tr`
    background: ${props => props.theme["gray-700"]};
    
    &:hover {
        background: ${props => props.theme["gray-800"]};
    }    
`;

export const LaunchesTd = styled.td`
    padding: 1.25rem 1.7rem;
    text-align: center;

    &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
    }

    &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
    }
`;

interface StatusLaunchesProps {
    variant: 'success' | 'failed';
}

export const StatusLaunches = styled.span<StatusLaunchesProps>`
    color: ${props => props.variant == 'success' ? props.theme["green-300"] : props.theme["red-300"]}
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  margin-top: 0.40rem;
  margin-left: auto;
  gap: 1rem;

  button {
    border: none;
    padding: 0.5rem 1rem;
    background-color: ${props => props.theme["green-500"]};
    color: white;
    font-weight: bold;
    border-radius: 6px;
    margin: 0 0.25rem;
    cursor: pointer;

    &:disabled {
      background-color: ${props => props.theme["green-800"]};
      cursor: not-allowed;
      filter: blur(0.5px);
    }

    &:hover {
      background: ${props => props.theme["green-500"]};
      transition: background-color 0.2s, color 0.2s, border-color 0.2s;
    }
  }

  @media (max-width: 780px) {
    margin-right: auto;
    margin-left: 0;
  }
`;