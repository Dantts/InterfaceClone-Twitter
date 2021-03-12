import styled from 'styled-components';

export const GlobalContainer = styled.div`
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
    background: rgba(255, 255, 255, 0.2);
`;

export const PanelComponents = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 600px;
    height: 600px;
    background: var(--BackgroundColorPrimary);
    border-radius: 20px;

    button{
        position: relative;
        background: none;
        color: white;
        border: none;
        cursor: pointer;
        font-size: calc(16px + var(--FontSize));
        font-weight: 700;
        font-family: 'Times New Roman';
        background-color: var(--ColorThemePrimary);
        height: 35px;
        width: calc(100px + var(--FontSize));
        border-radius: 35px;
        margin-top: 4px;
        transition: ease 0.2s;
        margin-top: 10px;
        outline: none;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }

    main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: auto;
        width: 100%;
        margin-top: 30px;

        h2{
            font-size: calc(22px + var(--FontSize));
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: var(--TextColorsPrimary);
            font-weight: bold;
            margin-bottom: 20px;
        }
        span{
            font-size: calc(13px + var(--FontSize));
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            color: var(--TextColorsSecundary);
            text-align: center;
            margin-bottom: 20px;
            margin: 0 20px;
        }
    }
`;

export const ExampleFontTweet = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    height: calc(50px + var(--FontSize));
    width: 75%;
    padding: 10px 20px;
    border: 1px solid rgba(136, 153, 166, 0.7);
    border-radius: 20px;
    margin-top: 20px;
    img{
        height: 40px;
        width: 40px;
        border-radius: 50px;
        margin-bottom: 10px;
        margin-right: 10px;
    }
    div{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        height: auto;
        width: 90%;
        margin-bottom: 10px;
        section{
            display: flex;
            flex-direction: row;
            margin-bottom: 2px;
            h2{
                font-weight: bold;
                font-size: calc(14px + var(--FontSize));
                color: var(--TextColorsPrimary);
                margin-right: 10px;
                margin-top: 3px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            }

            span{
                color: var(--TextColorsSecundary);
                font-size: calc(12px + var(--FontSize));
                text-align: center;
                margin-top: 3px;
            }

        }
        p{
            color: var(--TextColorsPrimary);
            font-size: calc(12px + var(--FontSize));
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    }
`;

export const FontSizeComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 20px;

    h6{
        font-size: calc(12px + var(--FontSize));
        font-weight: bold;
        color: var(--TextColorsSecundary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 5px;
        margin-left: 25px;
    }

    main{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-top: 0;
        section{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: var(--BackgroundColorSecundary);
            width: 92%;
            height: 40px;
            border-radius: 15px;
            input{
                width: 90%;
            }

            h5{
                font-size: 12px;
                font-weight: bold;
                color: var(--TextColorsSecundary);
                margin-left: 10px;
                margin-right: 10px;
            }
            span{
                font-size: 16px;
                font-weight: bold;
                color: var(--TextColorsSecundary);
                margin-left: 10px;
                margin-right: 15px;
            }
        }
    }
`;

export const ColorSelectComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 20px;

    h6{
        font-size: calc(12px + var(--FontSize));
        font-weight: bold;
        color: var(--TextColorsSecundary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 5px;
        margin-left: 25px;
    }

    main{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-top: 0;

        section{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: var(--BackgroundColorSecundary);
            width: 92%;
            height: 90px;
            border-radius: 15px;

            div{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 50px;
                width: 50px;
                border-radius: 50px;
                cursor: pointer;
                .iconMark{
                    color: rgba(255,255,255, 1);
                }
                &:nth-of-type(1){
                    margin: 0 0 0 15px;
                }
                &:nth-of-type(6){
                    margin: 0 15px 0 0;
                }

            }
        }
    }
`;

export const ThemeSelectComponent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 100%;
    height: auto;
    margin-top: 20px;

    h6{
        font-size: calc(12px + var(--FontSize));
        font-weight: bold;
        color: var(--TextColorsSecundary);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin-bottom: 5px;
        margin-left: 25px;
    }

    main{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: auto;
        margin-top: 0;

        section{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background: var(--BackgroundColorSecundary);
            width: 92%;
            height: 90px;
            border-radius: 15px;

            div{
                display: flex;
                align-items: center;
                justify-content: center;
                height: 60px;
                width: 30%;
                border-radius: 5px;
                cursor: pointer;
                p{
                    font-weight: 400;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                    margin-left: 5px;
                    font-size: calc(14px + var(--FontSize));
                }


                .iconMark{
                    color: var(--ColorThemePrimary);
                }
                &:nth-of-type(1){
                    margin: 0 0 0 15px;
                }
                &:nth-of-type(3){
                    margin: 0 15px 0 0;
                }

            }
            .selected{
                border: 1px solid var(--ColorThemePrimary);
            }
        }
    }
`;