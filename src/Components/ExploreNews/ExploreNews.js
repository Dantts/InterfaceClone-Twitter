import React from 'react';
import {Link} from 'react-router-dom';

import {IconContext} from 'react-icons';

import {BsThreeDots} from 'react-icons/bs';

import { GlobalExploreNewsComponent,

} from './styles';

function ExploreNews(props) {
    return (
        <GlobalExploreNewsComponent>
            <Link className='OnClickMomentsOf' >
                <div>
                    <p>{props.momentsOf}</p>
                    <IconContext.Provider value={{size: '20px'}}>
                        <BsThreeDots className='ExploreNews-Icon'/>
                    </IconContext.Provider>
                </div>
                <h2>{props.title}</h2>
                <p>{`${props.tweets} Tweets`}</p>
            </Link>
        </GlobalExploreNewsComponent>
    );
}

export default ExploreNews;