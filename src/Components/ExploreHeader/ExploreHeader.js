import React from 'react';
import {IconContext} from 'react-icons';

import {BiSearch} from 'react-icons/bi';
import {VscGear} from 'react-icons/vsc';
import { Link } from 'react-router-dom';

import { GlobalExporeConponent,
    GlobalSearchComponent,
    SearchComponent,
    GlobalTabExploreComponent,

} from './styles';

function ExploreHeader(props) {
    return (
        <GlobalExporeConponent>
            <GlobalSearchComponent>
                <SearchComponent>
                    <IconContext.Provider value={{size: '18px'}}>
                        <BiSearch className='TwitterIcon-navegation'/>
                    </IconContext.Provider>

                    <input type='text'  placeholder='Buscar no Twitter'/>
                </SearchComponent>
                <IconContext.Provider value={{size: '20px'}}>
                    <VscGear className='ExploreHeader-Gear'/>
                </IconContext.Provider>
            </GlobalSearchComponent>

            <GlobalTabExploreComponent>
                <Link to='/explore' className={`TabExplore ${props.forYou}`}>Para você</Link>
                <Link to='/explore/tabs/trending' className={`TabExplore ${props.trending}`}>Assuntos do Momento</Link>
                <Link to='/explore/tabs/news' className={`TabExplore ${props.news}`}>Notícias</Link>
                <Link to='/explore/tabs/sports' className={`TabExplore ${props.sports}`}>Esportes</Link>
                <Link to='/explore/tabs/entertainment' className={`TabExplore ${props.entertainment}`}>Enterterimento</Link>
            </GlobalTabExploreComponent>
        </GlobalExporeConponent>
    );
}

export default ExploreHeader;