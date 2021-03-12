import React from 'react';

import { GlobalForYouComponent,

} from './styles';

function ExploreTopNews(props) {
    return (
        <GlobalForYouComponent>
            <img src={props.img} alt='img'/>
            <div>
                <span>{props.momentsOf}</span>
                <p>{props.title}</p>
            </div>
        </GlobalForYouComponent>
    );
}

export default ExploreTopNews;