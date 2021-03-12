import styled from 'styled-components';

export const RelativeComponent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 321px;
    height: 42px;
    margin-left: 25px;

    @media(max-width: 1140px){
        width: 300px;
    }
`;

export const BarfixedComponent = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: inherit;
    height: inherit;
    background: var(--BackgroundColorPrimary);
`;

export const GlobalComponent = styled.div`
    display: flex;
    position: fixed;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background: var(--BackgroundColorSecundary);
    border-radius: 20px;
    width: 321px;
    height: 35px;

    @media(max-width: 1140px){
        width: 300px;
    }

    .SearchIcon-navegation{
        color: var(--TextColorsSecundary);
        margin: 0 6px 0 10px;
    }

    input{
        width: 270px;
        height: 25px;
        background: none;
        border: none;
        outline: none;

        &::placeholder{
            color: var(--TextColorsSecundary);
            font-size: 12px;
        }
    }

`;