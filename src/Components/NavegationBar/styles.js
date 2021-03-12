import styled from 'styled-components';


export const GeneralContainer = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 257px;
    @media(max-width: 1280px){
        width: 170px;
    }
`;


export const NavegationContainer = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    width: 257px;
    height: 100vh;



    .iconTwitter{
        padding: 9px;
        border-radius: 17px;
        color: var(--TextColorsPrimary);
        cursor: pointer;
        transition: ease 0.2s;
        
        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }

    .TwitterIcon-navegation{
        color: inherit;
        size: 24px;
    }

    .container-navegation-buttons{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        padding: 9px;
        margin: 8px 0;
        border-radius: 20px;
        color: var(--TextColorsPrimary);
        transition: ease 0.2s;
        cursor: pointer; 

        &:hover{
            color: var(--ColorThemePrimary);
            background-color: var(--ColorThemeSecundary);
        }
        
    }
    h2{
            color: inherit;
            font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: calc(16px + var(--FontSize));
            font-weight: 700;
            padding: 0px;
            margin: 0 5px 0 14px;
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
        height: 42px;
        width: 228px;
        border-radius: 35px;
        margin-top: 4px;
        transition: ease 0.2s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }

    @media(max-width: 1280px){
        width: 0px;

        button{
            width: 70px;
        }

        h2{
            display: none;
        }
    }

`;
export const Navegation = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    z-index: 1;

    .verified{
        color: var(--ColorThemePrimary);
    }
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    width: 257px;
    height: 50px;
    color: var(--TextColorsPrimary);
    border-radius: 50px;
    cursor: pointer;
    transition: ease 0.2s;

    @media(max-width: 1280px){
        width: 45px;
        height: 45px;

        .twitterIcon-flechaBaixo{
            display: none;
        }

        p, span{
            display: none;
        }
        .verifiedIcon{
            display: none;
        }
    }

    &:hover{
        background-color: var(--ColorThemeSecundary);
    }
    main{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-left: 4px;
    }

    section{
        display: flex;
        flex-direction: row;
    }

    p{
        color: var(--TextColorsPrimary);
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: calc(12px + var(--FontSize));
        padding: 0px;
        font-weight: 600;
        margin-left: 7px;
        margin-bottom: 2px;
        margin-right: 5px;
    }

    span{
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color: var(--TextColorsSecundary);
        font-size: calc(12px + var(--FontSize));
        margin-left: 5px;
        font-weight: 400;
        padding: 0px;
    }

    .twitterIcon-flechaBaixo{
        margin-right: 10px;
    }
`;

export const MoreNavegation = styled.div`
    display: flex;
    position: absolute;
    flex-direction: column;
    height: 344px;
    width: 213px;
    margin-top: 110px;
    border-radius: 10px;
    overflow: hidden;
    z-index: 3;
    box-shadow: rgba(136, 153, 166, 0.2) 0px 0px 15px, rgba(136, 153, 166, 0.15) 0px 0px 3px 1px;
    background: var(--BackgroundColorPrimary);

    section{
        width: auto;
        border-bottom: 1px solid rgba(255,255,255, 0.4);
    }
    .moreNavegationLink{
        display: flex;
        flex-direction: row;
        width: auto;
        height: 17px;
        padding: 13px;
        align-items: center;
        justify-content: flex-start;
        text-decoration: none;
        cursor: pointer;

        .icon{
            color: var(--TextColorsPrimary);
            margin-right: 10px;
        }

        span{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: calc(13px + var(--FontSize));
            color: var(--TextColorsPrimary);
        }
        &:hover{
            background: var(--BackgroundColorSecundary);
        }
    }
`;