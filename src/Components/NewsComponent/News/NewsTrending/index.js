import React from 'react';

import {NewsTrendingContaniner, TitlesContainer} from './styles';

const NewsTrending = (props) => {
    return (
        <NewsTrendingContaniner>
            <div className='OnClickMomentsOf' >
                <TitlesContainer>
                    <p>{props.moments}</p>
                    <h2>{props.title}</h2>
                    <p>{`${props.tweets} Tweets`}</p>
                </TitlesContainer>
                <img src={props.img} alt='img'/>
            </div>
        </NewsTrendingContaniner>
    )
}

export default NewsTrending;