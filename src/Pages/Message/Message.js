import React from 'react';
import {IconContext} from 'react-icons';
import ChatSelect from './Components/ChatComponent/ChatComponent';

import {BsEnvelope} from 'react-icons/bs'
import {BiSearch} from 'react-icons/bi';

import NavegationBar from '../../Components/NavegationBar/index';

import { GeneralMessageComponent,
    GeneralSwitchChatMessage,
    HeaderMessageComponent,
    SearchMessageComponent,
    ScrollMessageComponent,
    DisplayChatComponent,

} from './styles';

function Message() {
    document.title = 'Mensagens / Twitter';
    return (
        <GeneralMessageComponent>
            <NavegationBar message='verified'/>
            
            <GeneralSwitchChatMessage>
                <HeaderMessageComponent>
                    <h1>Mensagens</h1>
                    <IconContext.Provider value={{size: '20px'}} >
                        <BsEnvelope className='IconMessage'/>
                    </IconContext.Provider>
                </HeaderMessageComponent>

                <ScrollMessageComponent>
                    <SearchMessageComponent>
                        <div>
                            <IconContext.Provider value={{size: '18px'}}>
                                <BiSearch className='SearchIcon-navegation'/>
                            </IconContext.Provider>

                            <input type='text'  placeholder='Buscar pessoas e grupos'/>
                        </div>
                    </SearchMessageComponent>

                    <ChatSelect 
                    verified='on' 
                    userName='Profiles' 
                    arroba='profiles' 
                    time='2'
                    picture='https://picjumbo.com/wp-content/uploads/alone-with-his-thoughts-1080x720.jpg'
                     />
                    <ChatSelect 
                    verified='on' 
                    userName='Twitter' 
                    arroba='TwitterClone' 
                    time='25'
                    picture='https://manualdousuario.net/wp-content/uploads/2014/07/Twitter.png'
                     />
                    <ChatSelect 
                    verified='on' 
                    userName='Styled-Components' 
                    arroba='StyledComponents' 
                    time='36'
                    picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'
                     />
                    
                </ScrollMessageComponent>
            </GeneralSwitchChatMessage>

            <DisplayChatComponent>
                <h2>Você não tem uma mensagem selecionada</h2>
                <span>Escolha uma mensagem entre as existentes ou inicie uma nova.</span>
                <button>Nova Mensagem</button>

            </DisplayChatComponent>
        </GeneralMessageComponent>
    );
}   

export default Message;