import React from 'react';

import {IconContext} from 'react-icons';

import {HiOutlineDotsHorizontal} from 'react-icons/hi';

import NavegationBar from '../../Components/NavegationBar/index';
import NewsComponent from '../../Components/NewsComponent/index';
import PostsComponent from '../../Components/PostsComponent/index';


import { GlobalContainerItensSaved,
    ContainerItensSavedPage

} from './styles';

function ItensSaved() {
    document.title = 'Itens salvos / Twitter';
    return (
        <GlobalContainerItensSaved>
            <NavegationBar items='verified'/>

            <ContainerItensSavedPage>
                <header>
                    <section>
                        <h2>Itens salvos</h2>
                        <span>@UserNewProfile</span>
                    </section>

                    <IconContext.Provider value={{size: '18px'}}>
                        <HiOutlineDotsHorizontal className='Icon-threeDots'/>
                    </IconContext.Provider>
                </header>

                <PostsComponent verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <PostsComponent verified='true' userName='UserProfile' arroba='UserNewProfile' time='22' img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                <PostsComponent verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
                <PostsComponent userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>

            </ContainerItensSavedPage>

            <NewsComponent />
        </GlobalContainerItensSaved>
    )
}

export default ItensSaved;