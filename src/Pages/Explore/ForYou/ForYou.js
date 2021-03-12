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
                <ExploreHeader forYou='verified'/>
            </section>
            <main>
                <ExploreTopNews 
                img='https://i1.wp.com/www.selectgame.com.br/wp-content/uploads/2019/10/Demon-Slayer-Tanjirou-e-Nezuko-Wallpaper-Full-HD-Anime.png?fit=1920%2C1080&ssl=1'
                title='Kimetsu no Yaiba – Continuação em filme ganha trailer com música tema e novo visual'
                momentsOf='Enterterimento - Esta manhã'
                />

                <ExploreNews 
                momentsOf='Enterterimento'
                title='Goblin Slayer – Mangá será lançado no Brasil ainda esse ano'
                tweets='13 mil'
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
                momentsOf='Tecnologia' 
                title='Twitter clone é feito com ReactJs' 
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