import styled from 'styled-components';

export const PhotoProfileContainer = styled.div`
    display: flex;
    height: 90%;
    width: auto;
    margin: 6px 5px 0 10px;
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    border-bottom: 0.1px solid rgba(95, 106, 106, 0.5);
    cursor: pointer;
    

    &:hover{
        background-color: rgba(95, 106, 106, 0.1);
    }


`;

export const PostsInformations = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

export const PostsUserInformation = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    div{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        margin-top: 8px;

        .UserVerified-Icon{
            color: var(--TextColorsPrimary);
        }

    }
    p{
        color: var(--TextColorsSecundary);
        font-size: calc(10px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;
        margin-left: 5px;
    }

    .UserInformationName{
        color: var(--TextColorsPrimary);
        font-weight: 600;
        font-size: calc(13px + var(--FontSize));
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
        text-decoration: none;
        margin-right: 3px;
    }
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 20px;
        width: 20px;
        cursor: pointer;
        border-radius: 50px;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }
    }
`;

export const PostsTweetContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 99%;
    height: auto;
    margin-top: 6px;
    margin-right: 10px;
    
    span{
        overflow-wrap: break-word;
        color: var(--TextColorsPrimary);
        font-family: Arial, Helvetica, sans-serif;
        font-size: calc(14px + var(--FontSize));
        margin-bottom: 10px;
    }

    img{
        height: 300px;
        width: 99%;
        border-radius: 20px;
    }
`;

export const PostsTwetsFeedBack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 99%;
    height: 30px;
    margin-top: 2px;
    margin-right: 10px;

    .ShareIconPosts{
        color: var(--TextColorsSecundary);
    }

    .c-wi2fgdf{
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        width: 30px;
        border-radius: 50px;
        cursor: pointer;

        &:hover{
            background-color: var(--ColorThemeSecundary);
        }

        &:hover .ShareIconPosts{
            color: var(--ColorThemePrimary);
        }
    }

`;

export const PostsFeedBackIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-right: 80px;
    height: inherit;

    div{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: inherit;
        transition: all 0.5s;
    }

    
    section{
        display: flex;
        justify-content: center;
        align-items: center;
        height: inherit;
        width: 30px;
        border-radius: 50px;
        cursor: pointer;
    }
    
    span{
        color: var(--TextColorsSecundary);
        font-size: 10px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
    .MessageIconPosts, .ReTweetIconPosts, .LikeIconPosts{
        color: var(--TextColorsSecundary);
    }
    .c-gsdfo23{
        transition: ease 0.3s;

        &:hover span{
            color: var(--ColorThemePrimary);
        }
        &:hover section{
            background-color: var(--ColorThemeSecundary);
        }

        &:hover .MessageIconPosts{
            color: var(--ColorThemePrimary);
        }
    }
    .c-gdojopk3{
        transition: ease 0.3s;

        &:hover span{
            color: rgb(39, 174, 96);
        }
        &:hover section{
            background-color: rgba(39, 174, 96, .13)
        }
        &:hover .ReTweetIconPosts{
            color: rgb(39, 174, 96);
        }
    }
    .c-hfresa23{
        transition: ease 0.3s;

        &:hover span{
            color: rgb(182, 0, 0);
        }
        &:hover section{
            background-color: rgba(182, 0, 0, .13)
        }
        &:hover .LikeIconPosts{
            color: rgb(182, 0, 0);
        }
    }



    
`;