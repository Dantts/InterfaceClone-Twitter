import styled from 'styled-components';

export const GlobalForYouComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;

    section{
        display: flex;
        position: fixed;
        width: inherit;
        height: 92px;
        z-index: 2;
    }

    main{
        display: flex;
        flex-direction: column;
        width: 598px;
        height: auto;
        margin-top: 94px;
    }
`;
