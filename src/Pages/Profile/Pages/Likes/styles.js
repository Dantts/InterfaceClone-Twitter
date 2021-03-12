import styled from 'styled-components';

export const GlobalContainerProfile = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;

    div:nth-of-type(2){
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        margin-top: 25px;

        h2{
            font-family: Arial, Helvetica, sans-serif;
            font-size: calc(17px + var(--FontSize));
            color: var(--TextColorsPrimary);
            font-weight: bold;
        }

        span{
            font-family: Arial, Helvetica, sans-serif;
            font-size: calc(13px + var(--FontSize));
            color: var(--TextColorsSecundary);
            margin: 15px 35px;
        }
    }
`;