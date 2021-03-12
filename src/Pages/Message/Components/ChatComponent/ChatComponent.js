import React from 'react';

import PhotoProfile from '../../../../Components/PhotoProfile/index';
import {IconContext} from 'react-icons';

import {GoVerified} from 'react-icons/go';

import {
    PhotoProfileContainer,
    ChatSelectContainer,
    ChatSelectInformations,
    ChatSelectUserInformation,
    ChatSelectMessageContainer,
} from './styles';
import { Link } from 'react-router-dom';

function ChatComponent(props) {
    return (
        <ChatSelectContainer>

            <PhotoProfileContainer>
                <PhotoProfile width='40' height='40' picture={props.picture}/>
            </PhotoProfileContainer>

            <ChatSelectInformations>

                <ChatSelectUserInformation>
                        <div>
                            <Link className='UserInformationName'>{props.userName}</Link>
                            {props.verified ? 
                            <IconContext.Provider value={{size: '13px'}} >
                                <GoVerified className='UserVerified-Icon'/>
                            </IconContext.Provider>
                            : null}
                            <p>{`@${props.arroba}`}</p>
                        </div>
                    <section>
                        <p>{`${props.time} Mim`}</p>
                    </section>
                </ChatSelectUserInformation>

                <ChatSelectMessageContainer>
                    <span>
                    lorem ipsum dolor sit amet consectetur
                    </span>
                </ChatSelectMessageContainer>

            </ChatSelectInformations>

        </ChatSelectContainer>
    )
}

export default ChatComponent;