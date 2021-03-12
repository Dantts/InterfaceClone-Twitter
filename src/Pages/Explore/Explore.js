import React from 'react';
import {Switch, Route} from 'react-router-dom';

import NavegationBar from '../../Components/NavegationBar/index';
import NewsComponent from '../../Components/NewsComponent/index';
import ForYou from './ForYou/ForYou';
import Trending from './Trending/Trending';
import News from './News/News';
import Sports from './Sports/Sports';
import Entertainment from './Entertainment/Entertainment';

import { 
    GlobalContainerExplore,
    GlobalExportConponent,


} from './styles';

function Explore() {
    document.title = 'Explorer / Twitter';
    return (
        <GlobalContainerExplore>
            <NavegationBar explore='verified'/>

            <GlobalExportConponent>
                <Switch>
                    <Route exact path='/explore' component={ForYou} />
                    <Route  path='/explore/tabs/trending' component={Trending} />
                    <Route  path='/explore/tabs/news' component={News} />
                    <Route  path='/explore/tabs/sports' component={Sports} />
                    <Route  path='/explore/tabs/entertainment' component={Entertainment} />
                </Switch>
            </GlobalExportConponent>

            <NewsComponent news='verified'/>
        </GlobalContainerExplore>
    );
}

export default Explore;