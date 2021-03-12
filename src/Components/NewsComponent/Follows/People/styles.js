import styled from 'styled-components';

export const NewsTrendingContaniner = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 321px;
    height: auto;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    @media(max-width: 1140px){
        width: 300px;
    }

    .OnClickMomentsOf{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: row;
        width: inherit;
        height: inherit;
        text-decoration: none;
        padding: 10px 0;

        img{
            height: 50px;
            width: 50px;
            border-radius: 50px;
            margin-left: 10px;
        }

        button{
            position: relative;
            background: none;
            border: none;
            color: var(--ColorThemePrimary);
            font-size: calc(14px + var(--FontSize));
            font-weight: bold;
            border: 1px solid var(--ColorThemePrimary);
            padding: 5px 10px;
            border-radius: 20px;
            cursor: pointer;
            margin: 10px 10px 0 0;

            &:hover{
                background: var(--ColorThemeSecundary);
            }
        }
    }

    


    &:hover{
        background-color: rgba(86, 101, 115 , 0.2);
    }
`;

export const TitlesContainer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 347px;
    height: auto;

    p{
        margin-left: 10px;
        color: var(--TextColorsSecundary);
        font-size: calc(10px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;
    }

    h2{
        margin-left: 10px;
        margin-top: 12px;
        margin-bottom: 3px;
        color: var(--TextColorsPrimary);
        font-weight: 600;
        font-size: calc(12px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;

        &:hover{
            border-bottom: 1px solid white;
        }
    }

    section{
        display: flex;
        flex-direction: row;

        .IconVerified{
            color: var(--TextColorsPrimary);
            margin-top: 12px;
            margin-left: 5px;
        }
    }
`;