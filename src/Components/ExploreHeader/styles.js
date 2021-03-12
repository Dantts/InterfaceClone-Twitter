import styled from 'styled-components';

export const GlobalExporeConponent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 92px;
    background: var(--colorMode);
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
`;

export const GlobalSearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 46px;

    .ExploreHeader-Gear{
        margin-right: 10px;
        padding: 5px;
        color: var(--ColorThemePrimary);
        border-radius: 20px;
        cursor: pointer;
        transition: ease .3s;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;

export const SearchComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: rgba(86, 101, 115 ,.3);
    border-radius: 20px;
    width: 85%;
    height: 30px;
    margin-left: 15px;

    .TwitterIcon-navegation{
        color: var(--TextColorsSecundary);
        margin: 0 6px 0 10px;
    }

    input{
        width: inherit;
        height: 25px;
        background: none;
        border: none;
        outline: none;
        color: white;

        &::placeholder{
            color: var(--TextColorsSecundary);
            font-size: 12px;
        }
    }
`;

export const GlobalTabExploreComponent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 46px;

    .TabExplore{
        padding: 15px 15px;
        text-decoration: none;
        color: white;
        font-weight: 600;
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