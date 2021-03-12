import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {IconContext} from 'react-icons';
import PhotoProfile from '../PhotoProfile/index.js';

import {SiTwitter} from 'react-icons/si';
import {BiHomeCircle, BiEnvelope, BiBookmark, BiChevronDown} from 'react-icons/bi';
import {BsBell, BsLightning, BsBoxArrowUpRight, BsGear} from 'react-icons/bs';
import {HiHashtag, HiOutlineUser, HiOutlineDotsCircleHorizontal} from 'react-icons/hi';
import {RiFileList2Line, RiPaintBrushFill} from 'react-icons/ri';
import {GoVerified, GoGraph} from 'react-icons/go';
import {ImBubble2} from 'react-icons/im';
import {AiOutlineQuestionCircle} from 'react-icons/ai';
import {CgShortcut} from 'react-icons/cg';
import {
    GeneralContainer,
    NavegationContainer,
    ProfileContainer,
    Navegation,
    MoreNavegation
} from './styles';

import {usePanel} from '../../Utils/Contexts/ThemePanelContext';

const NavegationBar = (props) => {
    const {setPanel} = usePanel();

    const [state, setState] = useState(false);

    const ToggleMoreNavegation = () => {
        setState(!state);
    }   

    return (
            <GeneralContainer>
                <NavegationContainer>
                    <Navegation>
                        <IconContext.Provider value={{size: '26px', className: 'iconTwitter'}}>
                            <SiTwitter/>
                        </IconContext.Provider>
                        <Link className='container-navegation-buttons ' to='/'>
                        <IconContext.Provider value={{size: '26px'}}>
                            <BiHomeCircle  className={`TwitterIcon-navegation ${props.home}`}/>
                        </IconContext.Provider>
                            <h2 className={`${props.home}`}>Página Inicial</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/explore'>
                            <IconContext.Provider value={{size: '27px'}}>
                                <HiHashtag  className={`TwitterIcon-navegation ${props.explore}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.explore}`}>Explorar</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/notifications'>
                            <IconContext.Provider value={{size: '22px'}}>
                                <BsBell  className={`TwitterIcon-navegation ${props.notification}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.notification}`}>Notificações</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/messages'>
                            <IconContext.Provider value={{size: '24px'}}>
                                <BiEnvelope  className={`TwitterIcon-navegation ${props.message}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.message}`}>Mensagens</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/bookmarks'>
                            <IconContext.Provider value={{size: '24px'}}>
                                <BiBookmark  className={`TwitterIcon-navegation ${props.items}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.items}`}>Itens salvos</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/lists'>
                            <IconContext.Provider value={{size: '24px'}}>
                                <RiFileList2Line  className={`TwitterIcon-navegation ${props.lists}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.lists}`}>Lista</h2>
                        </Link>
                        <Link className='container-navegation-buttons' to='/profile'>
                            <IconContext.Provider value={{size: '24px'}}>
                                <HiOutlineUser  className={`TwitterIcon-navegation ${props.profile}`}/>
                            </IconContext.Provider>
                            <h2 className={`${props.profile}`}>Perfil</h2>
                        </Link>
                        <div onClick={() => ToggleMoreNavegation()} className='container-navegation-buttons'>
                            <IconContext.Provider value={{size: '24px'}}>
                                <HiOutlineDotsCircleHorizontal  className={`TwitterIcon-navegation`}/>
                            </IconContext.Provider>
                            <h2>Mais</h2>
                        </div>
                        <button>Tweetar</button>
                    </Navegation>

                    {state ? 
                    <MoreNavegation>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "16px"}} >
                                <ImBubble2 className='icon'/>
                            </IconContext.Provider>
                            <span>Tópicos</span>
                        </div>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "16px"}} >
                                <BsLightning className='icon'/>
                            </IconContext.Provider>
                            <span>Moments</span>
                        </div>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "16px"}} >
                                <BsBoxArrowUpRight className='icon'/>
                            </IconContext.Provider>
                            <span>Anúncios do Twitter</span>
                        </div>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "14px"}} >
                                <GoGraph className='icon'/>
                            </IconContext.Provider>
                            <span>Estatísticas</span>
                        </div>
                        <section></section>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "14px"}} >
                                <BsGear className='icon'/>
                            </IconContext.Provider>
                            <span>Configurações e privacidade</span>
                        </div>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "16px"}} >
                                <AiOutlineQuestionCircle className='icon'/>
                            </IconContext.Provider>
                            <span>Central de Ajuda</span>
                        </div>
                        <div onClick={() => {setPanel(true); setState(!state)}} className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "15px"}} >
                                <RiPaintBrushFill className='icon'/>
                            </IconContext.Provider>
                            <span>Tela</span>
                        </div>
                        <div className='moreNavegationLink'>
                            <IconContext.Provider value={{size: "16px"}} >
                                <CgShortcut className='icon'/>
                            </IconContext.Provider>
                            <span>Teclas de atalho</span>
                        </div>
                    </MoreNavegation>
                    : null}

                    <ProfileContainer>
                        <main>
                            <PhotoProfile width='35' height='35' picture='https://definicao.net/wp-content/uploads/2019/04/anime-2.jpg'/>
                            <div>
                                <section>
                                    <p>UserProfile</p>
                                    <IconContext.Provider value={{size: '12px'}}>
                                        <GoVerified className='verifiedIcon'/>
                                    </IconContext.Provider>
                                </section>
                                <span>@UserNewProfile</span>
                            </div>
                        </main>
                        <IconContext.Provider value={{size: '21px'}}>
                            <BiChevronDown  className='TwitterIcon-navegation twitterIcon-flechaBaixo'/>
                        </IconContext.Provider>
                    </ProfileContainer>
                </NavegationContainer>
            </GeneralContainer>
    )
}

export default NavegationBar;