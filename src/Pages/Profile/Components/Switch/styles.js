import styled from 'styled-components';

export const SwitchContentProfile = styled.div`
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 46px;
    margin-top: 10px;
    .TabExplore{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding: 15px 6%;
        text-decoration: none;
        color: var(--TextColorsSecundary);
        font-weight: 600;
        font-size: 14px;
        transition: ease .3s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
            color: var(--ColorThemePrimary);
        }
    }

    .verified{
        border-bottom: 1px solid var(--ColorThemePrimary);
        color: var(--ColorThemePrimary);
    }
`;