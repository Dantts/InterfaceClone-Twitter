import styled from 'styled-components';

export const GeneralContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: ${props => `${props.height}px`};
    width: ${props => `${props.width}px`};
    background-color: gray;
    border-radius: 50px;
    overflow: hidden;

    img{
        border-radius: 50px;
        height: 100%;
        width: 100%;
    }
`;