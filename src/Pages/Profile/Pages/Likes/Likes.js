import React from 'react';

import SwitchPageProfile from '../../Components/Switch/Switch';


import { GlobalContainerProfile } from './styles';

function Likes() {
    return (
        <GlobalContainerProfile>
            <SwitchPageProfile likes='verified'/>

            <div>
                <h2>Você ainda não tem curtidas</h2>
                <span>Toque no coração de qualquer tweet para mostrar seu amor. Quando você fizer isso, ele aparecerá aqui.</span>
            </div>
        
        </GlobalContainerProfile>
    )
}

export default Likes;