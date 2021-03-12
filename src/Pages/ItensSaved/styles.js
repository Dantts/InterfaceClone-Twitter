import styled from 'styled-components';

export const GlobalContainerItensSaved = styled.div`
    display: flex;
    flex-direction: row;
    width: auto;
    height: auto;

    @media(max-width: 1140px){
        margin-right: 50px;
    }
`;

export const ContainerItensSavedPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 598px;
    height: 100%;
    border-right: 0.1px solid rgba(95, 106, 106, 0.5);
    border-left: 0.1px solid rgba(95, 106, 106, 0.5);

    header{
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

    }
`;