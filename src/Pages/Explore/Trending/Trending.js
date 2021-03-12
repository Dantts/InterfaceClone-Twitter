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
                <ExploreHeader trending='verified'/>
            </section>
            <main>
                <ExploreTopNews 
                img='https://s2.glbimg.com/jPamZzJ-mYjHI1BfFedgbHyY6Wo=/0x0:1030x591/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/p/C/fvOElJQhCxLNfuKG7y3w/1602342847430794.jpg'
                title='SC registra geada na Serra; no Litoral, calor deixa praias lotadas'
                momentsOf='Notícias - Esta manhã'
                />

                <ExploreNews 
                momentsOf='Esportes'
                title='CS:GO: FalleN anuncia saída da MIBR após demissões de TACO, fer e Dead'
                tweets='134 mil'
                />
                <ExploreNews 
                momentsOf='Esportes'
                title='CS:GO: após dois campeonatos, LUCAS1 deixa a Imperial'
                tweets='243 mil'
                />
                <ExploreNews 
                momentsOf='Notícias'
                title='Governo altera regras e Grande SP e mais cinco regiões avançam para fase verde do plano de flexibilização econômica'
                tweets='53 mil'
                />
                <ExploreNews 
                momentsOf='Notícias' 
                title='Trump planeja voltar à campanha com 1º evento público após diagnóstico de Covid-19' 
                tweets='984 mil'
                />
                <ExploreNews 
                momentsOf='Enterterimento' 
                title='SSSS.Dynazenon – Anime de ação pelo estúdio de Kill la Kill ganha 1º trailer' 
                tweets='534 mil'
                />
                <ExploreNews 
                momentsOf='Enterterimento' 
                title='Higurashi – Staff “escondeu” verdadeiro título e possíveis mudanças para o reboot' 
                tweets='34 mil'
                />
            </main>
        </GlobalForYouComponent>
    );
}

export default ForYou;