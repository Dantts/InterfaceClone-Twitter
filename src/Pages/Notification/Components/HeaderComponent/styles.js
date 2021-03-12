import styled from 'styled-components';

export const GlobalContainerNotification = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
`;

export const GlobalNotificationConponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const GlobalHeaderComponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 92px;
    border-bottom: 3px solid rgba(95, 106, 106, 0.5);
`;

export const NotificationHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    justify-content: space-between;
    align-items: center;

    p{
        font-weight: bold;
        color: var(--TextColorsPrimary);
        margin-left: 10px;
        font-size: calc(17px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;
    }

    .notificationHeader-Gear{
        margin-right: 10px;
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

export const SwitchHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50%;
    justify-content: center;
    align-items: center;

    .SwitchNotification{
        text-decoration: none;
        width: 50%;
        padding: 16px 0;
        text-align: center;
        color: var(--TextColorsPrimary);
        font-weight: 600;
        transition: ease .3s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
            color: var(--ColorThemePrimary);
        }

    }
    .verified{
        border-bottom: 1px solid var(--ColorThemePrimary);
        color: var(--ColorThemePrimary);
    }
`;