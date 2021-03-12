import React from 'react';
import {IconContext} from 'react-icons';

import {ImCheckmark} from 'react-icons/im';
import {IoIosCheckmarkCircle} from 'react-icons/io';
import {BsCircle} from 'react-icons/bs';

import { GlobalContainer,
    PanelComponents,
    ExampleFontTweet,
    FontSizeComponent,
    ColorSelectComponent,
    ThemeSelectComponent,

} from './styles';

import {usePanel} from '../../Utils/Contexts/ThemePanelContext';
import {useTheme, useColorTheme, useFontSize} from '../../Utils/Contexts/ThemeContext';
import Light from '../../styles/Theme/Light';
import LittleDark from '../../styles/Theme/LittleDark';
import Dark from '../../styles/Theme/Dark';

function PanelComponent () {
    const {theme ,setTheme} = useTheme();
    const {colorTheme, setColorTheme} = useColorTheme();
    const {font, setFont} = useFontSize();
    const {setPanel} = usePanel();

    return(
        <GlobalContainer>
            <PanelComponents>
                <main>
                    <h2>Personalizar sua exibição</h2>
                    <span>Gerencie o tamanho da fonte, a cor e o plano de fundo. Essas configurações afetam todas as contas do Twitter Clone neste navegador.</span>
                </main>

                <ExampleFontTweet>
                    <img src='https://imagens.canaltech.com.br/empresas/652.400.jpg' alt='img'/>
                    <div>
                        <section>
                            <h2>Twitter</h2>
                            <span>@TwitterClone - 1 h</span>
                        </section>
                        <p>lorem ipsum dolor sit amet consectetur adipiscing elit torquent urna at tincidunt id magna venenatis potenti in turpis convallis ligula</p>
                    </div>
                </ExampleFontTweet>

                <FontSizeComponent>
                    <h6>Tamanho da fonte</h6>
                    <main>
                        <section>
                            <h5>Aa</h5>
                            <input type='range'
                             onChange={(event) => {setFont({
                                fontSizeNumber: event.target.value, 
                                fontSizePixel: `${event.target.value}px`})}}
                             min='0' max='2.5' step='0.5' 
                             value={font.fontSizeNumber}/>
                            <span>Aa</span>
                        </section>
                    </main>
                </FontSizeComponent>

                <ColorSelectComponent>
                    <h6>Cor</h6>
                    <main>
                        <section>
                            <div onClick={() => setColorTheme({title: 'blue', colorPrimary: 'rgb(29, 161, 242)', colorSecundary: 'rgba(29, 161, 242, 0.2)'})} style={{background: 'rgb(29, 161, 242)'}}>
                                {colorTheme.title === 'blue' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                            <div onClick={() => setColorTheme({title: 'yellow', colorPrimary: 'rgb(255, 173, 31)', colorSecundary: 'rgba(255, 173, 31, 0.2)'})} style={{background: 'rgb(255, 173, 31)'}}>
                                {colorTheme.title === 'yellow' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                            <div onClick={() => setColorTheme({title: 'pink', colorPrimary: 'rgb(224, 36, 94)', colorSecundary: 'rgba(224, 36, 94, 0.2)'})} style={{background: 'rgb(224, 36, 94)'}}>
                                {colorTheme.title === 'pink' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                            <div onClick={() => setColorTheme({title: 'purple', colorPrimary: 'rgb(121, 75, 196)', colorSecundary: 'rgba(121, 75, 196, 0.2)'})} style={{background: 'rgb(121, 75, 196)'}}>
                                {colorTheme.title === 'purple' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                            <div onClick={() => setColorTheme({title: 'orange', colorPrimary: 'rgb(244, 93, 34)', colorSecundary: 'rgba(244, 93, 34, 0.2)'})} style={{background: 'rgb(244, 93, 34)'}}>
                                {colorTheme.title === 'orange' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                            <div onClick={() => setColorTheme({title: 'green', colorPrimary: 'rgb(23, 191, 99)', colorSecundary: 'rgba(23, 191, 99, 0.2)'})} style={{background: 'rgb(23, 191, 99)'}}>
                                {colorTheme.title === 'green' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <ImCheckmark className='iconMark'/>
                                    </IconContext.Provider>
                                : null}
                            </div>
                        </section>
                    </main>
                </ColorSelectComponent>

                <ThemeSelectComponent>
                    <h6>Plano de fundo</h6>
                    <main>
                        <section>
                            <div onClick={() => setTheme(Light)} className={theme.title === 'light' ? 'selected' : null}  style={{background: 'rgb(255, 255, 255)'}}>
                                {theme.title === 'light' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <IoIosCheckmarkCircle className='iconMark'/>
                                    </IconContext.Provider>
                                : 
                                    <IconContext.Provider value={{size: '18px'}}>
                                        <BsCircle className='iconMark'/>
                                    </IconContext.Provider>
                                    }
                                <p style={{color: 'rgb(0,0,0)'}}>Padrão</p>
                            </div>
                            <div onClick={() => setTheme(LittleDark)} className={theme.title === 'littleDark' ? 'selected' : null} style={{background: 'rgb(21, 32, 43)'}}>
                                {theme.title === 'littleDark' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <IoIosCheckmarkCircle className='iconMark'/>
                                    </IconContext.Provider>
                                : 
                                <IconContext.Provider value={{size: '18px'}}>
                                    <BsCircle className='iconMark'/>
                                </IconContext.Provider>
                                }
                                <p style={{color: 'white'}}>Um Pouco esc...</p>
                            </div>
                            <div onClick={() => setTheme(Dark)} className={theme.title === 'dark' ? 'selected' : null}  style={{background: 'rgb(0, 0, 0)'}}>
                                {theme.title === 'dark' ? 
                                    <IconContext.Provider value={{size: '22px'}}>
                                        <IoIosCheckmarkCircle className='iconMark'/>
                                    </IconContext.Provider>
                                : 
                                <IconContext.Provider value={{size: '18px'}}>
                                    <BsCircle className='iconMark'/>
                                </IconContext.Provider>
                                }
                                <p style={{color: 'white'}}>Superescuro</p>
                            </div>
                        </section>
                    </main>
                </ThemeSelectComponent>

                <button onClick={() => setPanel(false)}>concluído</button>
            </PanelComponents>
        </GlobalContainer>
    );
}

export default PanelComponent;