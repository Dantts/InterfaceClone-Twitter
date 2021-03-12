import styled from 'styled-components';

export const GeneralMessageComponent = styled.div`
    display: flex;
    flex-direction: row;
    overflow: none;
`;

export const GeneralSwitchChatMessage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 379px;
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const HeaderMessageComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 46px;
    width: 379px;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    h1{
        color: var(--TextColorsPrimary);
        font-size: calc(16px + var(--FontSize));
        font-weight: bold;
        margin-left: 15px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .IconMessage{
        margin-right: 10px;
        padding: 8px;
        color: var(--ColorThemePrimary);
        border-radius: 15px;
        cursor: pointer;
        transition: ease .3s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;

export const SearchMessageComponent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 360px;
    height: 50px;
    padding: 8px 0;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        background: var(--BackgroundColorSecundary);
        border-radius: 20px;
        width: 90%;
        height: 38px;
        margin-left: 15px;

        .SearchIcon-navegation{
            color: var(--TextColorsSecundary);
            margin: 0 6px 0 10px;
        }

        input{
            width: 270px;
            height: 25px;
            background: none;
            border: none;
            outline: none;
            color: white;

            &::placeholder{
                color: var(--TextColorsSecundary);
                font-size: 12px;
            }
        }
    }

`;

export const ScrollMessageComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100vh;
    overflow-y: scroll;
`;

export const DisplayChatComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items:  center;
    justify-content: center;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    height: 100%;
    width: 599px;

    h2{
        color: var(--TextColorsPrimary);
        font-size: calc(16px + var(--FontSize));
        font-weight: 600;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    span{
        color: var(--TextColorsSecundary);
        font-size: calc(13px + var(--FontSize));
        font-weight: 500;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 15px 0;
    }

    button{
        position: relative;
        background: none;
        color: white;
        border: none;
        cursor: pointer;
        font-size: calc(12px + var(--FontSize));
        font-weight: 700;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        background-color: var(--ColorThemePrimary);
        height: 38px;
        width: calc(130px + var(--FontSize));
        border-radius: 35px;
        margin-top: 4px;
        transition: ease 0.2s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;