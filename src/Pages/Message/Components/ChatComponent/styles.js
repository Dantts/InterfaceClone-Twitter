import styled from 'styled-components';

export const PhotoProfileContainer = styled.div`
    display: flex;
    height: 90%;
    height: auto;
    margin: 0px 5px 5px 10px;
`;

export const ChatSelectContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 66px;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    cursor: pointer;
    

    &:hover{
        background-color: rgba(95, 106, 106, 0.1);
    }


`;

export const ChatSelectInformations = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const ChatSelectUserInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        .UserVerified-Icon{
            color: var(--TextColorsPrimary);
        }

    }
    p{
        color: var(--TextColorsSecundary);
        font-size: calc(10px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 5px;
    }

    .UserInformationName{
        color: var(--TextColorsPrimary);
        font-weight: 600;
        font-size: 13.5px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        text-decoration: none;
        margin-right: 3px;
    }
    section{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-right: 10px;
    }
`;

export const ChatSelectMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 99%;
    height: auto;
    margin-top: 6px;
    margin-right: 10px;

    span{
        overflow-wrap: break-word;
        color: var(--TextColorsPrimary);
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(14px + var(--FontSize));
        margin-bottom: 10px;
    }

    img{
        height: 300px;
        width: 99%;
        border-radius: 20px;
    }
`;