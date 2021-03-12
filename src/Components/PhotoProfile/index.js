import React from 'react';
import {GeneralContainer} from './styles';

const PhotoProfile = ({width, height, picture}) => {
    return (
        <GeneralContainer width={width} height={height}>
            <img src={picture} alt='img'/>
        </GeneralContainer>
    )
}

export default PhotoProfile;