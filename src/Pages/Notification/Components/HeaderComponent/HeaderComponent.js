import React from 'react';

import {Link} from 'react-router-dom';

import {IconContext} from 'react-icons';

import {VscGear} from 'react-icons/vsc';

import {     GlobalHeaderComponent,
    NotificationHeader,
    SwitchHeaderContainer,


} from './styles';

function HeaderComponent(props) {
    return(
        <GlobalHeaderComponent>
            <NotificationHeader>
                <p>Notificações</p>
                <IconContext.Provider value={{size: '20px'}}>
                    <VscGear className='notificationHeader-Gear'/>
                </IconContext.Provider>
            </NotificationHeader>

            <SwitchHeaderContainer>
                <Link to='/notifications' className={`SwitchNotification ${props.all}`}>Tudo</Link>
                <Link to='/notifications/mention' className={`SwitchNotification ${props.mention}`}>Menções</Link>
            </SwitchHeaderContainer>

        </GlobalHeaderComponent>

    );
}

export default HeaderComponent;