import React from 'react';

import {IconContext} from 'react-icons';

import {HiOutlineDotsHorizontal} from 'react-icons/hi';
import {FaRegListAlt} from 'react-icons/fa';

import NavegationBar from '../../Components/NavegationBar/index';
import NewsComponent from '../../Components/NewsComponent/index';


import { GlobalContainerLists,
    ContainerListsPage,
    ContainerHeaderListPage,
    ContainerListFixed,
    ContainerMyList


} from './styles';

function Lists() {
    document.title = 'Listas criadas por @UserNewProfile / Twitter';
    return (
        <GlobalContainerLists>
            <NavegationBar lists='verified'/>

            <ContainerListsPage>
                <ContainerHeaderListPage>
                    <section>
                        <h2>Listas</h2>
                        <span>@UserNewProfile</span>
                    </section>
                    <div>
                        <IconContext.Provider value={{size: '18px'}}>
                            <FaRegListAlt  className='Icon-threeDots'/>
                            <HiOutlineDotsHorizontal className='Icon-threeDots'/>
                        </IconContext.Provider>
                    </div>
                </ContainerHeaderListPage>
        
                <ContainerListFixed>
                    <header>
                        <h2>Fixado</h2>
                    </header>

                    <div>
                        <h2>Ainda não há nada para ver aqui — fixe até cinco das suas Listas favoritas para acessá-las rapidamente.</h2>
                    </div>
                    
                </ContainerListFixed>

                <ContainerMyList>
                    <header>
                        <h2>Suas Listas</h2>
                    </header>

                    <div>
                        <h2>Você ainda não criou nenhuma lista</h2>
                        <span>Quando você realizar essa ação, eles aparecerão aqui.</span>
                        <button>Criar uma lista</button>
                    </div>
                </ContainerMyList>

            </ContainerListsPage>

            <NewsComponent />
        </GlobalContainerLists>
    )
}

export default Lists;