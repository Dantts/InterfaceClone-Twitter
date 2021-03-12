import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {GlogalDivRouter} from './styles/AppStyles';

import HomePage from './Pages/Home/home';
import ExplorePage from './Pages/Explore/Explore';
import NotificantionPage from './Pages/Notification/Notification';
import MessagePage from './Pages/Message/Message';
import BookMarksPage from './Pages/ItensSaved/ItensSaved';
import ListsPage from './Pages/Lists/Lists';
import ProfilePage from './Pages/Profile/profile';
import PanelComponent from './Components/PanelComponent/PanelComponent';

import GlobalStyles from './styles/globalStyles';

import ScrollToTop from './ScrollToTop';

import {usePanel} from './Utils/Contexts/ThemePanelContext';
import {useTheme, useColorTheme, useFontSize} from './Utils/Contexts/ThemeContext'

function App() {
  const {panel} = usePanel();
  const {theme} = useTheme();
  const {font} = useFontSize();
  const {colorTheme} = useColorTheme();
  
  return (
    <GlogalDivRouter>
      <GlobalStyles scroll={panel ? 'hidden' : 'scroll'} theme={theme} colorTheme={colorTheme} fontSize={font}/>
      <ScrollToTop>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/explore' component={ExplorePage }/>
          <Route path='/notifications' component={NotificantionPage} />
          <Route path='/messages' component={MessagePage} />
          <Route path='/bookmarks' component={BookMarksPage} />
          <Route path='/lists' component={ListsPage} />
          <Route path='/profile' component={ProfilePage} />
        </Switch>
      </ScrollToTop>
      {panel ? <PanelComponent /> : null}
    </GlogalDivRouter>
  );
}

export default App;
