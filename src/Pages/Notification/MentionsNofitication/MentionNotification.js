import React from 'react';

import { GeneralContainer } from './styles';

import HeaderNotification from '../Components/HeaderComponent/HeaderComponent';
import BoxMention from '../Components/BoxMentionNotification/BoxMention';

function MentionsNofitication() {
    return (
        <GeneralContainer>
            <HeaderNotification mention='verified' />

            <BoxMention verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
            <BoxMention verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
            <BoxMention userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                
            <BoxMention verified='true' userName='Twitter' arroba='TwitterClone' time='1' picture='https://imagens.canaltech.com.br/empresas/652.400.jpg'/>
            <BoxMention verified='true' userName='Styled-Components' arroba='StyledComponents' time='32' picture='https://i2.wp.com/blog.logrocket.com/wp-content/uploads/2019/06/styledcomponents1.png?fit=730%2C412&ssl=1'/>
            <BoxMention userName='User2' arroba='UserNewProfile' time='44' img='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png' picture='https://i.pinimg.com/736x/0e/c6/6b/0ec66b439eb296c4f69cc261e44a785b.jpg'/>
                
        </GeneralContainer>
    );
}

export default MentionsNofitication;