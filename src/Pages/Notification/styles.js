import styled from 'styled-components';

export const GlobalContainerNotification = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;
    @media(max-width: 1140px){
        margin-right: 50px;
    }
`;

export const GlobalNotificationConponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
`;

