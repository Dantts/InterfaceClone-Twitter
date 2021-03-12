import React from 'react';
import {IconContext} from 'react-icons';

import {GiStarShuriken} from 'react-icons/gi'
import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {GlobalContainerNotification,
    GlobalItemsContainer,
    IconContainer,
    HeaderContainer,
    MainContainer

} from './styles';

function BoxNotification(props) {
    return(
        <GlobalContainerNotification>
            <GlobalItemsContainer>
                <IconContainer>
                    <IconContext.Provider value={{size: '27px'}} >
                        <GiStarShuriken className='IconNotification'/>
                    </IconContext.Provider>
                </IconContainer>
                <HeaderContainer>
                    <img src={props.picture} alt='img'/>
                    <IconContext.Provider value={{size: '22px'}} >
                        <HiOutlineDotsHorizontal className='IconNotification' />
                    </IconContext.Provider>
                </HeaderContainer>
            </GlobalItemsContainer>
            <MainContainer>
                <div>
                    <h2>Tweet recente de</h2>
                    <span>{props.user}</span>
                </div>
                <p>{props.main}</p>
            </MainContainer>
        </GlobalContainerNotification>
    );
}

export default BoxNotification;