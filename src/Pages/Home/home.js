import React from 'react';
import {IconContext} from 'react-icons';

import NavegationBar from '../../Components/NavegationBar/index';

import {HiOutlineSparkles} from 'react-icons/hi';
import {BsCardImage} from 'react-icons/bs';
import {AiOutlineCalendar } from 'react-icons/ai';
import {MdGif} from 'react-icons/md';
import {VscGraph} from 'react-icons/vsc';
import {GrEmoji} from 'react-icons/gr';
import NewsComponent from '../../Components/NewsComponent/index';
import PhotoProfile from '../../Components/PhotoProfile/index';

import {GlobalContainerHome,
     ContainerHomePage,
     HeaderContainer,
     TweetContainer,
     PhotoProfileContainer,
     TweetWriteContainer,
     TweetIconsContainer,
    } from './styles';
import PostsComponent from '../../Components/PostsComponent';

const Home = () => {
    document.title = 'Página Inicial / Twitter';
    
    return (
        <GlobalContainerHome>
            <NavegationBar home='verified'/>
            <ContainerHomePage>
                <HeaderContainer>
                    <p>Página Inicial</p>
                    <IconContext.Provider value={{size: '18px'}}>
                        <HiOutlineSparkles className='Header-Icon' />
                    </IconContext.Provider>
                </HeaderContainer>

                <TweetContainer>
                    <PhotoProfileContainer>
                        <PhotoProfile width='40' height='40' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                    </PhotoProfileContainer>

                    <TweetWriteContainer>
                        <input placeholder='O que está acontecendo?'/>
                        <TweetIconsContainer>
                            <div>
                                <IconContext.Provider value={{size: '18px'}}>
                                    <section>
                                        <BsCardImage className='TweetsIcons' />
                                    </section>
                                    <section>
                                        <IconContext.Provider value={{size: '30px'}} >
                                            <MdGif className='TweetsIcons'/>
                                        </IconContext.Provider>
                                    </section>
                                    <section>
                                        <VscGraph className='TweetsIcons'/>
                                    </section>
                                    <section>
                                        <GrEmoji className='TweetsIcons'/>
                                    </section>
                                    <section>
                                        <AiOutlineCalendar className='TweetsIcons'/>
                                    </section>
                                </IconContext.Provider>
                            </div>
                            <button>Tweetar</button>
                        </TweetIconsContainer>

                    </TweetWriteContainer>

                </TweetContainer>

                <PostsComponent verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <PostsComponent verified='true' userName='UserProfile' arroba='UserNewProfile' time='22' img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                <PostsComponent verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
                <PostsComponent userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                
                <PostsComponent verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <PostsComponent verified='true' userName='UserProfile' arroba='UserNewProfile' time='22' img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                <PostsComponent verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
                <PostsComponent userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                
                <PostsComponent verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <PostsComponent verified='true' userName='UserProfile' arroba='UserNewProfile' time='22' img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                <PostsComponent verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
                <PostsComponent userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                
                <PostsComponent verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <PostsComponent verified='true' userName='UserProfile' arroba='UserNewProfile' time='22' img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                <PostsComponent verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
                <PostsComponent userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>

            </ContainerHomePage>
            <NewsComponent />
        </GlobalContainerHome>
   )
}

export default Home;