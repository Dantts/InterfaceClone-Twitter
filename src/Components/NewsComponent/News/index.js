import React from 'react';
import MomentsOf from './MomentsOf/index';
import NewsTrending from './NewsTrending/index';

import {
    GlobalComponent,
    WhatsNewComponent,
    MoreWhatsNew,

} from './styles';

const News = () => {
    return (
        <GlobalComponent>
            <WhatsNewComponent>
                <h2>O que está acontecendo</h2>
            </WhatsNewComponent>
            <MomentsOf MomentsOf='Assuntos do Momento no Brasil' title='UserProfile cancelado.' tweets='8.874' />
            <NewsTrending moments='Tecnologia - 2 horas' title='Twitter clone é feito com ReactJs' tweets='984 mil' img='https://blog.fellyph.com.br/wp-content/uploads/2016/06/react-js.png'/>
            <MomentsOf MomentsOf='Assuntos do Momento no Mundo' title='O melhor Twitter clone do mundo.' tweets='884 mil'/>
            <NewsTrending moments='Tecnologia - 5 horas' title='Styled-Component é uma otima biblioteca para usar com ReactJs' tweets='54 mil' img='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1' />
            <MoreWhatsNew>
                <div className='MoreWhatsNewsLink'>
                    <p>Mostrar Mais</p>
                </div>
            </MoreWhatsNew>
        </GlobalComponent>
    )

}

export default News;