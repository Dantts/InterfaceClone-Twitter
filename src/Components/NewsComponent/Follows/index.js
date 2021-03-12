import React from 'react';
import People from './People/index';

import {
    GlobalComponent,
    WhatsNewComponent,
    MoreWhatsNew,

} from './styles';

const Follows = () => {
    return (
        <GlobalComponent>
                <WhatsNewComponent>
                    <h2>Quem sequir</h2>
                </WhatsNewComponent>
                <People verified='true' user='Twitter' arroba='TwitterClone' img='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
                <People user='User2' arroba='NewUser2' img='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                <People verified='true' user='Styled-Components' arroba='StyledComponents' img='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1' />
                <MoreWhatsNew>
                    <div className='MoreWhatsNewsLink'>
                        <p>Mostrar Mais</p>
                    </div>
                </MoreWhatsNew>

        </GlobalComponent>
    )

}

export default Follows;