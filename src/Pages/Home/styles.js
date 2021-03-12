import styled from 'styled-components';

export const GlobalContainerHome = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;

    @media(max-width: 1140px){
        margin-right: 50px;
    }
`;

export const ContainerHomePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const HeaderContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: auto;
    height: 43px;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    p{
        color: var(--TextColorsPrimary);  
        padding-left: 13px;  
        font-weight: bold;
        font-size: calc(14px + var(--FontSize));
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .Header-Icon{
        color: var(--ColorThemePrimary);
        padding-right: 13px;
    }
`;

export const TweetContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    width: auto;
    height: 89px;
    border-bottom: 2mm solid rgba(95, 106, 106, 0.4);
`;

export const PhotoProfileContainer = styled.div`
    display: flex;
    height: 90%;
    width: auto;
    margin: 6px 5px 0 10px;
`;

export const TweetWriteContainer = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    margin-right: 13px;
    input{
        width: 98%;
        height: 30px;
        margin-top: 10px;
        margin-right: 13px;
        background: none;
        border: none;
        outline: none;

        &::placeholder{
            color: var(--TextColorsSecundary);
            font-size: 16px;
            font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }

`;

export const TweetIconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 33px;
    justify-content: space-between;
    margin-bottom: 5px;
    div{
        display: flex;
        justify-content: center;
        align-items: center;

        section{
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            width: 30px;
            height: 28px;
            border-radius: 50px;
            transition: ease 0.2s;
            &:hover{
                background-color: var(--ColorThemeSecundary);
            }

            .TweetsIcons{
                color: var(--ColorThemePrimary);
            }
        }

    }

    button{
        position: relative;
        background: none;
        color: white;
        border: none;
        cursor: pointer;
        font-size: calc(12px + var(--FontSize));
        font-weight: 700;
        font-family: 'Times New Roman';
        background-color: var(--ColorThemePrimary);
        height: 32px;
        width: calc(70px + var(--FontSize));
        border-radius: 35px;
        transition: ease 0.2s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;
