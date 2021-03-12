import React from 'react';
import {Switch, Route} from 'react-router-dom';


import NavegationBar from '../../Components/NavegationBar/index';
import NewsComponent from '../../Components/NewsComponent/index';
import AllNotification from './AllNotification/AllNotification';
import MentionNotification from './MentionsNofitication/MentionNotification';

import { GlobalContainerNotification,
    GlobalNotificationConponent,




} from './styles';

function Notification() {
    document.title = 'Notificações / Twitter'
  return (
      <GlobalContainerNotification>
            <NavegationBar notification='verified'/>

            <GlobalNotificationConponent>
                <Switch>
                    <Route exact path='/notifications' component={AllNotification} />
                    <Route path='/notifications/mention' component={MentionNotification} />
                </Switch>
            </GlobalNotificationConponent>

            <NewsComponent />
      </GlobalContainerNotification>
  );
}

export default Notification;