import styled from 'styled-components';

export const GlobalContainerProfile = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 100vh;

    @media(max-width: 1140px){
        margin-right: 50px;
    }
`;

export const ContainerProfilePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: auto;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const HeaderContainerProfilePage = styled.div`
    display: flex;
    position: fixed;
    background: var(--BackgroundColorPrimary);
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    width: 598px;
    height: 46px;
    z-index: 1;

    div{
        margin-left: 20px;
        h2{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: calc(16px + var(--FontSize));
            color: var(--TextColorsPrimary);
            font-weight: bold;
        }
        span{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            font-size: calc(10px + var(--FontSize));
            color: var(--TextColorsSecundary);
            font-weight: bold;
        }

    }
    .icon{
        color: var(--ColorThemePrimary);
        margin-left: 8px;
        padding: 7px;
        cursor: pointer;
        border-radius: 20px;
        &:hover{
            background: var(--ColorThemeSecundary);

        }
    }
`;

export const ImagesProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 46px;
    img{
        width: 100%;
        height: 201px;
        z-index: -1;
    }

    div{
        display: flex;
        position: absolute;
        flex-direction: row;
        width: 598px;
        align-items: flex-end;
        justify-content: space-between;
        margin-top: 110px;
        

        img{
            border-radius: 100%;
            width:132px;
            height: 132px;
            padding: 5px;
            background: var(--BackgroundColorPrimary);
            margin-left: 10px;
            z-index: -1;
        }

        button{
            background: none;
            color: var(--ColorThemePrimary);
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 700;
            font-family: 'Times New Roman';
            border: 2px solid var(--ColorThemePrimary);
            height: 35px;
            width: 110px;
            border-radius: 35px;
            transition: ease 0.2s;
            margin-right: 15px;
            margin-bottom: 8px;

            &:hover{
                background-color: var(--ColorThemeSecundary);
            }
        }
    }
`;

export const InformationProfile = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 55px;
    margin-left: 10px;
    h1{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: calc(16px + var(--FontSize));
        color: var(--TextColorsPrimary);
        font-weight: bold;
        margin-bottom: 4px;
    }
    span{
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(12px + var(--FontSize));
        color: var(--TextColorsSecundary);
        font-weight: 100;
    }
    p{
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(14px + var(--FontSize));
        color: var(--TextColorsPrimary);
        margin: 8px 0;
    }

    div{
        display: flex;
        flex-direction: row;

        section{
            &:nth-child(2){
                margin-left: 10px;
            }
            .icon-Marker{
                color: var(--TextColorsSecundary);
            }
            span{
                font-size: calc(13px + var(--FontSize));
                margin-left: 2px;
                font-weight: 100;
                font-family: Arial, Helvetica, sans-serif;
            }

        }
    }

    div:nth-of-type(2){
        display: flex;
        flex-direction: row;
        margin-top: 9px;
        section{
            display: flex;
            flex-direction: row;
            &:nth-child(2){
                margin-left: 10px;
            }

            h2{
                font-size: calc(13px + var(--FontSize));
                color: var(--TextColorsPrimary);
                margin-left: 2px;
                font-weight: bold;
                font-family: Arial, Helvetica, sans-serif;
            }
            span{
                font-size: calc(13px + var(--FontSize));
                margin-left: 2px;
                font-weight: 100;
                font-family: Arial, Helvetica, sans-serif;
            }
        }
    }
    main{
        display: flex;
        flex-direction: row;
    }

    .verifiedIcon{
        color: white;
        margin-top: 5px;
        margin-left: 5px;
    }

`;

