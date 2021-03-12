import styled from 'styled-components';

export const GlobalContainerLists = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: 100vh;

    @media(max-width: 1140px){
        margin-right: 50px;
    }
`;

export const ContainerListsPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: 100%;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const ContainerHeaderListPage = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    padding: 8px;

    .Icon-threeDots{
        color: var(--ColorThemePrimary);
        margin-right: 5px;
        cursor: pointer;
        padding: 4px;
        border-radius: 20px;

        &:hover{
            background: var(--ColorThemeSecundary);
        }
    }

    section{
        margin-left: 10px;

        h2{
            color: var(--TextColorsPrimary);  
            font-size: calc(16px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            font-weight: bold;
        }

        span{
            color: var(--TextColorsSecundary);
            font-size: calc(11px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
        }
    }
`;

export const ContainerListFixed = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: 100%;
    border-bottom: 5px solid rgba(95, 106, 106, 0.5);

    header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 19px;
        width: auto;
        padding: 10px;
        border-bottom: 1px solid rgba(95, 106, 106, 0.5);

        h2{
            color: var(--TextColorsPrimary);  
            font-size: calc(16px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            font-weight: bold; 
        }
    }

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 66px;
        width: 100%;
        padding: 10px;

        h2{
            color: var(--TextColorsSecundary);  
            font-size: calc(13px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            margin: 0 10px 0 10px;
            text-align: center;
        }
    }
`;


export const ContainerMyList = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    header{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 19px;
        width: auto;
        padding: 10px;
        border-bottom: 1px solid rgba(95, 106, 106, 0.5);

        h2{
            color: var(--TextColorsPrimary);  
            font-size: calc(16px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            font-weight: bold; 
        }
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 66px;
        width: 100%;
        padding: 10px;
        margin-top: 30px;

        h2{
            color: var(--TextColorsPrimary);  
            font-size: calc(16px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            font-weight: bold; 
        }

        span{
            color: var(--TextColorsSecundary);  
            font-size: calc(13px + var(--FontSize));
            font-family: "Oswald",--apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
            margin: 0 10px 0 10px;
            text-align: center;
            margin: 15px 0;
        }

        button{
            background: none;
            border: none;
            background: var(--ColorThemePrimary);
            padding: 10px;
            border-radius: 20px;
            color: white;
            font-weight: bold;
            cursor: pointer;

            &:hover{
                background: var(--ColorThemeSecundary);
            }
        }
    }
`;
