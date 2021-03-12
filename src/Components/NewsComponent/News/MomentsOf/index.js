import React from 'react';

import {MomentsContainer} from './styles';

const MomentsOf = (props) => {
    return (
        <MomentsContainer>
            <div className='OnClickMomentsOf' >
                <p>{props.MomentsOf}</p>
                <h2>{props.title}</h2>
                <p>{`${props.tweets} Tweets`}</p>
            </div>
        </MomentsContainer>
    )
}

export default MomentsOf;