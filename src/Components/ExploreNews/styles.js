import styled from 'styled-components';

export const GlobalExploreNewsComponent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Oswald&display=swap');
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 598px;
    height: auto;
    padding-bottom: 5px;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);

    .OnClickMomentsOf{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        width: inherit;
        height: inherit;
        text-decoration: none;
        padding: 5px 0;
    }

    p{
        margin-left: 10px;
        color: var(--TextColorsSecundary);
        font-size: calc(10px + var(--FontSize));
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2{
        margin: 0 10px 7px 10px;
        color: var(--TextColorsPrimary);
        font-weight: bold;
        font-size: calc(13px + var(--FontSize));
        font-family: "Oswald", --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }


    &:hover{
        background-color: rgba(86, 101, 115 ,.2);
    }

    div{
        display: flex;
        margin: 0;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        width: 99%;

        .ExploreNews-Icon{
            color: var(--ColorThemePrimary);
            padding: 3px;
            border-radius: 20px;
            transition: ease .3s;

            &:hover{
                background-color: var(--ColorThemeSecundary);
            }
        }
    }
`;