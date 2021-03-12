import styled from 'styled-components';

export const GlobalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 360px;
    height: auto;
    margin-left: 5px;
    .section-SearchComponent{
        margin-bottom: 5px;
        z-index: 2;
    }

    @media(max-width: 1100px){
        display: none;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 321px;
    margin: 20px 0 0 35px;
    .FooterLink{
        margin: 0 8px 4px 0;
        text-decoration: none;
        font-size: calc(12px + var(--FontSize));
        color: var(--TextColorsSecundary);

        &:hover{
            border-bottom: 1px solid rgba(171, 178, 185,.6);
        }
    }

    .FooterCopyright{
        margin: 0 8px 4px 0;
        text-decoration: none;
        font-size: calc(12px + var(--FontSize));
        color: var(--TextColorsSecundary);
    }

    .FooterLinkContainer{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`;