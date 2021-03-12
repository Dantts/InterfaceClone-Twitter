import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NavegationBar from '../../Components/NavegationBar/index';
import NewsComponent from '../../Components/NewsComponent/index';

import {IconContext} from 'react-icons';

import {AiOutlineArrowLeft} from 'react-icons/ai';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {BsCalendar} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';

import TweetsPage from './Pages/Tweets/Tweets'; 
import TweetsAndResponse from './Pages/TweetsAndReponse/TweetsAndResponse'; 
import MidiaPage from './Pages/Midia/midia';
import LikesPage from './Pages/Likes/Likes';


import { GlobalContainerProfile,
    ContainerProfilePage,
    HeaderContainerProfilePage,
    ImagesProfile,
    InformationProfile,

} from './styles';


function Profile() {
    document.title = 'UserProfile (@UserNewPorfile) / Twitter';
    return (
        <GlobalContainerProfile>
            <NavegationBar profile='verified'/>

            <ContainerProfilePage>
                <HeaderContainerProfilePage>
                    <IconContext.Provider value={{size: '18px'}}>
                        <AiOutlineArrowLeft className='icon'/>
                    </IconContext.Provider>
                    
                    <div>
                        <h2>UserProfile</h2>
                        <span>9 tweets</span>
                    </div>
                </HeaderContainerProfilePage>

                <ImagesProfile>
                    <img src='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg' alt='img' />
                    <div>
                        <img src='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg' alt='img'/>
                        <button>Editar Perfil</button>
                    </div>
                </ImagesProfile>

                <InformationProfile>
                    <main>
                        <h1>UserProfile</h1>
                        <IconContext.Provider value={{size: '12px'}}>
                            <GoVerified className='verifiedIcon'/>
                        </IconContext.Provider>
                    </main>
                    <span>@UserNewProfile</span>
                    <p>✨✌🏻💫</p>
                    <div>
                        <section>
                            <IconContext.Provider value={{size: '14px'}}>
                                <FaMapMarkerAlt className='icon-Marker'/>
                            </IconContext.Provider>
                            <span>Brasil</span>
                        </section>

                        <section>
                            <IconContext.Provider value={{size: '14px'}}>
                                <BsCalendar className='icon-Marker'/>
                            </IconContext.Provider>
                            <span>Ingressou em junho de 2014</span>
                        </section>
                    </div>

                    <div>
                        <section>
                            <h2>145</h2>
                            <span>Seguindo</span>
                        </section>
                        <section>
                            <h2>1.576</h2>
                            <span>Seguidores</span>
                        </section>
                    </div>
                </InformationProfile>

                <Switch>
                    <Route exact path='/profile' component={TweetsPage} />
                    <Route path='/profile/tweets_and_response' component={TweetsAndResponse} />
                    <Route path='/profile/midia' component={MidiaPage} />
                    <Route path='/profile/likes' component={LikesPage} />
                </Switch>

            </ContainerProfilePage>


            <NewsComponent />
        </GlobalContainerProfile>
    )
}

export default Profile;