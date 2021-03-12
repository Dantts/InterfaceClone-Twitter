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
            margin: 15px 0 0 25px;
        }

        button{
            position: relative;
            background: none;
            color: white;
            border: none;
            cursor: pointer;
            font-size: calc(14px + var(--FontSize));
            font-weight: 700;
            font-family: 'Times New Roman';
            background-color: var(--ColorThemePrimary);
            height: 40px;
            width: calc(200px + var(--FontSize));
            border-radius: 35px;
            transition: ease 0.2s;

            &:hover{
                background-color: var(--ColorThemeSecundary);
            }
        }
    }
`;