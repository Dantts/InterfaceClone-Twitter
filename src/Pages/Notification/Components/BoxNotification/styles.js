import styled from 'styled-components';

export const GlobalContainerNotification = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: auto;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    cursor: pointer;

    &:hover{
        background-color: rgba(95, 106, 106, 0.1);
    }
`;

export const GlobalItemsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    margin: 10px 10px 0 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 30px;
    height: 100%;
    margin-left: 16px;

    .IconNotification{
        color: rgb(124, 14, 216);
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 95%;
    height: 100%;
    align-items: center;
    justify-content: space-between;

    img{
        height: 28px;
        width: 28px;
        border-radius: 22px;
        margin-left: 5px;
    }

    .IconNotification{
        padding: 5px;
        color: var(--ColorThemePrimary);
        border-radius: 20px;
        cursor: pointer;
        transition: ease .3s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 88%;
    height: 100%;
    margin: 0px 10px 10px 60px;

    div{
        display: flex;
        flex-direction: row;
        margin: 5px 0;
        h2{
            color: var(--TextColorsPrimary);
            font-family: Arial, Helvetica, sans-serif;
            font-size: calc(16px + var(--FontSize));
        }
        span{
            margin-left: calc(5px + var(--FontSize));
            font-weight: bold;
            color: var(--TextColorsPrimary);
        }
    }

    p{
        color: var(--TextColorsSecundary);
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(14px + var(--FontSize));
        margin-top: 5px;
    }
`;