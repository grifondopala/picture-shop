import * as React from 'react';
import './footer.css';
import Background from '../../images/bg-footer.png'

export function Footer(){
    return(
        <footer>
            <div style={{backgroundImage: `url("${Background}")`}} id={'bg-footer'}>
            </div>
            <div className={'text-div'}>
                <p>+7 (495) 555-55-55</p>
                <p>Москва, Красная площадь, 52</p>
            </div>
            <div  className={'text-div'}>
                <p>© Эпоха возрождения, 2021</p>
            </div>
        </footer>
    )
}