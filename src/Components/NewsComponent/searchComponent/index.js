import React from 'react';
import {IconContext} from 'react-icons';

import {GlobalComponent, RelativeComponent, BarfixedComponent} from './styles';
import {BiSearch} from 'react-icons/bi';

const SearchComponent = () => {
    return (
        <RelativeComponent>
            <BarfixedComponent>
                <GlobalComponent>
                    <IconContext.Provider value={{size: '18px'}}>
                        <BiSearch className='SearchIcon-navegation'/>
                    </IconContext.Provider>

                    <input type='text'  placeholder='Buscar no Twitter'/>
                </GlobalComponent>
            </BarfixedComponent>
        </RelativeComponent>
    )
}

export default SearchComponent;