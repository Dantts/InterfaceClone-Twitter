import React from 'react';

import ExploreHeader from '../../../Components/ExploreHeader/ExploreHeader';
import ExploreNews from '../../../Components/ExploreNews/ExploreNews';
import ExploreTopNews from '../../../Components/ExploreTopNews/ExploreTopNews';

import { GlobalForYouComponent, 

} from './styles';

function ForYou() {
    return (
        <GlobalForYouComponent>
            <section>
                <ExploreHeader sports='verified'/>
            </section>
            <main>
                <ExploreTopNews 
                img='https://s2.glbimg.com/bfILYK5vi7P19-Ov1YjWQfzOJns=/0x0:680x453/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/r/7/AIxbCnSMuMHwCf9DDzfA/era5gmwucaa929r.jfif'
                title='CS:GO: FalleN anuncia saída da MIBR após demissões de TACO, fer e Dead'
                momentsOf='Esportes - Esta manhã'
                />

                <ExploreNews 
                momentsOf='Esportes'
                title='LoL: Riot Games anuncia fim da liga profissional da Oceania (OPL)'
                tweets='334 mil'
                />
                <ExploreNews 
                momentsOf='Esportes'
                title='Moscow Five: O time que foi a base do LoL competitivo'
                tweets='243 mil'
                />
                <ExploreNews 
                momentsOf='Esportes'
                title='Free Fire: SS domina final de semana da LBFF; Black Dragons cola no Santos'
                tweets='53 mil'
                />
                <ExploreNews 
                momentsOf='Esportes' 
                title='Fifa 21: Após reajustes, pacotes de Fifa Points chegam a custar até R$ 499' 
                tweets='984 mil'
                />
                <ExploreNews 
                momentsOf='Esportes' 
                title='CSGO: BOOM decide por permanência de Apoka mesmo com banimento' 
                tweets='534 mil'
                />
                <ExploreNews 
                momentsOf='Esportes' 
                title='Vivo Keyd anuncia entrada no cenário competitivo de VALORANT' 
                tweets='34 mil'
                />
            </main>
        </GlobalForYouComponent>
    );
}

export default ForYou;