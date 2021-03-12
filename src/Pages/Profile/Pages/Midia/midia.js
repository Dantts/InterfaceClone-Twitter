import React from 'react';

import SwitchPageProfile from '../../Components/Switch/Switch';


import { GlobalContainerProfile } from './styles';

function midia() {
    return (
        <GlobalContainerProfile>
            <SwitchPageProfile midia='verified'/>

            <div>
                <h2>Você ainda não Tweetou nenhuma foto ou vídeo</h2>
                <span>Quando você enviar Tweets com fotos ou vídeos, as fotos ou vídeos serão mostrados aqui.</span>
                <button>Tweetar uma foto ou vídeo</button>
            </div>
        
        </GlobalContainerProfile>
    )
}

export default midia;