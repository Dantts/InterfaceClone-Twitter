import styled from 'styled-components';


export const GlobalComponent = styled.div`
    display: flex;
    flex-direction: column;
    background: var(--BackgroundColorSecundary);
    width: 321px;
    height: auto;
    border-radius: 15px;
    overflow: hidden;
    margin-left: 25px;

    @media(max-width: 1140px){
        width: 300px;
    }
`;


export const WhatsNewComponent = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    flex-direction: column;
    width: 347px;
    height: auto;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    @media(max-width: 1140px){
        width: 300px;
    }

    h2{
        color: var(--TextColorsPrimary);
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 10px;
        font-size: calc(16px + var(--FontSize));
        font-weight: bold;
    }
`;

export const MoreWhatsNew = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 347px;
    height: 35px;

    @media(max-width: 1140px){
        width: 300px;
    }

    .MoreWhatsNewsLink{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        position: relative;
        width: 347px;
        height: inherit;
        text-decoration: none;
    }

    p{
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0 0 4px 10px;
        font-size: calc(12px + var(--FontSize));
        outline: none;
        color: var(--ColorThemePrimary);        
    }
    &:hover{
        background-color: rgba(86, 101, 115 ,.2);
    }
`;