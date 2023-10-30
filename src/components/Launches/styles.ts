import styled from "styled-components";

export const LaunchesContainer = styled.div`
    margin-top: 1.5rem;
    padding: 0.5rem 1rem;
    width: 100%;
    height: 26rem;
    border-radius: 0.5rem;
    background: ${props => props.theme["gray-600"]};
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

export const LaunchesTbody= styled.tbody`

`;

export const LaunchesTh = styled.th`
    background: ${props => props.theme["gray-600"]};
`;

export const LaunchesTr = styled.tr`
    background: ${props => props.theme["gray-700"]};
    
    &:hover {
        background: ${props => props.theme["gray-800"]};
    }    
`;

export const LaunchesTd = styled.td`
    padding: 1.25rem 1.7rem;

    img {
        align-items: center;
    }

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