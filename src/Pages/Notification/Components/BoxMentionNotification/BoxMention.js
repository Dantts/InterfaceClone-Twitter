import React from 'react';
import {Link} from 'react-router-dom';
import PhotoProfile from '../../../../Components/PhotoProfile/index';

import {IconContext} from 'react-icons';

import {GoVerified} from 'react-icons/go';
import {BiChevronDown, BiMessageRounded} from 'react-icons/bi';
import {FaRetweet} from 'react-icons/fa';
import {AiOutlineHeart} from 'react-icons/ai';
import {FiShare} from 'react-icons/fi'

import {
    PhotoProfileContainer,
    PostsContainer,
    PostsInformations,
    PostsUserInformation,
    PostsTweetContainer,
    PostsTwetsFeedBack,
    PostsFeedBackIcons,
    MentionContainer
} from './styles';

function MentionsNofitication(props) {
    return (
        <PostsContainer>

            <PhotoProfileContainer>
                <PhotoProfile width='40' height='40' picture={props.picture}/>
            </PhotoProfileContainer>

            <PostsInformations>

                <PostsUserInformation>
                        <div>
                            <Link className='UserInformationName'>{props.userName}</Link>
                            {props.verified ? 
                            <IconContext.Provider value={{size: '13px'}} >
                                <GoVerified className='UserVerified-Icon'/>
                            </IconContext.Provider>
                            : null}
                            <p>{`@${props.arroba}`}</p>
                            <p>-</p>
                            <p>{`${props.time} Mim`}</p>
                        </div>
                    <section>
                        <IconContext.Provider value={{size: '16px', color: 'gray'}}>
                            <BiChevronDown />
                        </IconContext.Provider>
                    </section>
                </PostsUserInformation>
                
                <MentionContainer>
                    <p>Em Resposta a</p>
                    <span>@UserNewProfile</span>
                </MentionContainer>

                <PostsTweetContainer>
                    <span>
                    lorem ipsum dolor sit amet consectetur adipiscing elit torquent urna at tincidunt id magna venenatis potenti in turpis convallis ligula leo interdum proin lectus tempus habitasse quis ultrices euismod laoreet sem vitae pharetra risus sagittis fames phasellus taciti aenean orci nulla enim fermentum augue ullamcorper montes posuere justo dapibus luctus molestie mollis porttitor dictum dis etiam scelerisque vel placerat dignissim ultricies tellus conubia sodales pulvinar erat ac odio lacinia pellentesque fusce curae elementum egestas purus ex varius vehicula curabitur nisl class magnis ridiculus accumsan gravida inceptos quam rutrum imperdiet ante nullam tempor arcu suspendisse rhoncus non lobortis malesuada tortor nostra
                    </span>  
                </PostsTweetContainer>

                <PostsTwetsFeedBack>
                    <PostsFeedBackIcons>
                        <div className='c-gsdfo23'>
                            <section>
                                <IconContext.Provider value={{size: '16px'}}>
                                    <BiMessageRounded className='MessageIconPosts'/>
                                </IconContext.Provider>
                            </section>
                            <span>1.234</span>
                        </div>
                    </PostsFeedBackIcons>

                    <PostsFeedBackIcons>
                        <div className='c-gdojopk3'>
                            <section>
                                <IconContext.Provider value={{size: '16px'}}>
                                    <FaRetweet className='ReTweetIconPosts'/>
                                </IconContext.Provider>
                            </section>
                            <span>5.432</span>
                        </div>
                    </PostsFeedBackIcons>

                    <PostsFeedBackIcons>
                        <div className='c-hfresa23'>
                            <section>
                                <IconContext.Provider value={{size: '16px'}}>
                                    <AiOutlineHeart className='LikeIconPosts'/>
                                </IconContext.Provider>
                            </section>
                            <span>6.345</span>
                        </div>
                    </PostsFeedBackIcons>

                    <section className='c-wi2fgdf'>
                        <IconContext.Provider value={{size: '16px'}} >
                            <FiShare className='ShareIconPosts'/>
                        </IconContext.Provider>
                    </section>
                </PostsTwetsFeedBack>

            </PostsInformations>

        </PostsContainer>
    );
}

export default MentionsNofitication;