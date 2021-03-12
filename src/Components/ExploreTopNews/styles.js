import styled from 'styled-components';

export const GlobalForYouComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;
    border-bottom: 4px solid rgba(95, 106, 106, 0.5);

    img{
        width: inherit;
        height: 336px;
    }

    div{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        position: absolute;
        background: linear-gradient(360deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, .8), rgba(0, 0, 0, .6), rgba(0, 0, 0, .4), rgba(0, 0, 0, .2), rgba(0, 0, 0, 0));
        width: inherit;
        height: 336px;

        p{
            color: white;
            margin-left: 15px;
            margin-bottom: 15px;
            font-weight: 600;
            font-family: Arial, Helvetica, sans-serif;
            font-size: calc(18px + var(--FontSize));
        }
        span{
            color: white;
            margin-left: 15px;
            margin-bottom: 8px;
            font-family: Arial, Helvetica, sans-serif;
            font-size: calc(12px + var(--FontSize));
        }
    }

`;