import React from 'react';
import { Link } from 'react-router-dom';


import { SwitchContentProfile } from './styles';

function Switch(props) {
    return (
        <SwitchContentProfile>
            <Link to='/profile' className={`TabExplore ${props.tweets}`}>Tweets</Link>
            <Link to='/profile/tweets_and_response' className={`TabExplore ${props.tweetsResponse}`}>Tweets e Respostas</Link>
            <Link to='/profile/midia' className={`TabExplore ${props.midia}`}>mídia</Link>
            <Link to='/profile/likes' className={`TabExplore ${props.likes}`}>Curtidas</Link>
        </SwitchContentProfile>
    )
}

export default Switch;