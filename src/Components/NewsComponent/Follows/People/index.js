import React from 'react';
import {IconContext} from 'react-icons';

import {GoVerified} from 'react-icons/go'

import {NewsTrendingContaniner, TitlesContainer} from './styles';

const People = (props) => {
    return (
        <NewsTrendingContaniner>
            <div className='OnClickMomentsOf' >
                <img src={props.img} alt='img' />
                <TitlesContainer>
                    <section>
                        <h2>{props.user}</h2>
                        {props.verified ? 
                        <IconContext.Provider value={{size: '12px'}} >
                            <GoVerified className='IconVerified'/>
                        </IconContext.Provider>
                        : null}
                    </section>
                    <p>{`@${props.arroba}`}</p>
                </TitlesContainer>
                <button>Seguir</button>
            </div>
        </NewsTrendingContaniner>
    )
}

export default People;