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
                <ExploreHeader entertainment='verified'/>
            </section>
            <main>
                <ExploreTopNews 
                img='http://br.web.img2.acsta.net/r_640_360/newsv7/20/10/09/21/05/5097670.jpg'
                title='The Boys: Jensen Ackles terá seu próprio grupo de heróis na 3ª temporada'
                momentsOf='Enterterimento - Esta manhã'
                />

                <ExploreNews 
                momentsOf='Enterterimento'
                title='Goblin Slayer – Mangá será lançado no Brasil ainda esse ano'
                tweets='13 mil'
                />
                <ExploreNews 
                momentsOf='Enterterimento'
                title='The Stand: Saiu o trailer da nova série inspirada no livro de Stephen King'
                tweets='243 mil'
                />
                <ExploreNews 
                momentsOf='Enterterimento'
                title='Enola Holmes: Netflix divulga cenas deletadas do filme'
                tweets='53 mil'
                />
                <ExploreNews 
                momentsOf='Enterterimento' 
                title='A Família Addams 2: Animação ganha teaser e data de estreia' 
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