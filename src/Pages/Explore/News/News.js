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
                <ExploreHeader news='verified'/>
            </section>
            <main>
                <ExploreTopNews 
                img='https://s2.glbimg.com/_m1uJhRPOJH86_pVZCt7j5sLAUQ=/0x0:800x450/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/h/I/sQhEgPSRAx4KYqyxceOA/114833456-gettyimages-985170852.jpg'
                title='Luz amarela para fome no Brasil foi acesa, diz brasileiro de agência da ONU que venceu Nobel da Paz'
                momentsOf='Notícias - Esta manhã'
                />

                <ExploreNews 
                momentsOf='Notícias'
                title='Árvore impediu que ônibus tombado com trabalhadores rurais caísse em ribanceira, diz Corpo de Bombeiros'
                tweets='334 mil'
                />
                <ExploreNews 
                momentsOf='Notícias'
                title='Mais de 100 mil veículos descem a serra em direção ao litoral paulista para feriado'
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
                momentsOf='Notícias' 
                title='Polícia Civil desmantela quadrilha que aplicava golpes contra idosos e bancos no RJ' 
                tweets='534 mil'
                />
                <ExploreNews 
                momentsOf='Notícias' 
                title='Mundo registra mais de 350 mil casos de coronavírus em 24 horas e bate novo recorde de infecções' 
                tweets='34 mil'
                />
            </main>
        </GlobalForYouComponent>
    );
}

export default ForYou;