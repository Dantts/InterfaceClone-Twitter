import React from 'react';
import StickyBox from 'react-sticky-box';

import {IconContext} from 'react-icons';

import {BiChevronDown} from 'react-icons/bi';

import {GlobalContainer, FooterContainer} from './styles';

import SearchComponent from './searchComponent/index';
import News from './News/index';
import Follows from './Follows/index';

const NewsComponent = (props) => {
    return (
        <GlobalContainer>
            <section className='section-SearchComponent'>
                {props.news ? null : <SearchComponent />}
            </section> 
            <StickyBox offsetTop={props.news ? 0 : 50} offsetBottom={props.news ? 0 : 20}>
                {props.news ? null : <News />}
                <Follows />
                <FooterContainer>
                    <div>
                        <h2 className='FooterLink'>Termos</h2>
                    </div>
                    <div>
                        <h2 className='FooterLink'>Política de Privacidade</h2>
                    </div>
                    <div>
                        <h2 className='FooterLink'>Cookies</h2>
                    </div>
                    <div>
                        <h2 className='FooterLink'>Informações de anúncios</h2>
                    </div>
                    <div>
                        <div className='FooterLink FooterLinkContainer'>
                            <p>Mais</p>
                            <IconContext.Provider value={{size: '12px', color: "rgba(171, 178, 185,.6)"}}>
                                <BiChevronDown />
                            </IconContext.Provider>
                        </div>
                    </div>
                    <div>
                        <p className='FooterCopyright'>© 2020 TwitterClone, inc</p>
                    </div>
                </FooterContainer>
            </StickyBox>
        </GlobalContainer>
    )
}

export default NewsComponent;