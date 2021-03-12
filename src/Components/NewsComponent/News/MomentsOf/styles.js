import styled from 'styled-components';

export const MomentsContainer = styled.div`
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
        flex-direction: column;
        width: inherit;
        height: inherit;
        text-decoration: none;
        padding: 10px 0;
    }

    p{
        margin-left: 10px;
        color: var(--TextColorsSecundary);
        font-size: calc(9px + var(--FontSize));
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2{
        margin: 7px 10px;
        color: var(--TextColorsPrimary);
        font-weight: bold;
        font-size: calc(13px + var(--FontSize));
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


    &:hover{
        background-color: rgba(86, 101, 115 ,.2);
    }
`;