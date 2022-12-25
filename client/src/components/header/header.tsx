import axios from 'axios'
import * as React from 'react'

import { LogoSvg } from '../../svg/logo.svg';
import { fetchBasket } from "../../store/basket-reducer";
import { useDispatch, useSelector } from "react-redux";

import './header.css'

export function Header(){

    const BasketHeader = () => {

        const dispatch = useDispatch()

        const [Ip, setIp] = React.useState('')
        const products = useSelector((state: any) => state.basket.products)

        React.useEffect(() => {
            const getData = async () => {
                const ipRes = await axios.get('https://geolocation-db.com/json/');
                fetchBasket(dispatch, ipRes.data.IPv4)
                setIp(ipRes.data.IPv4);
            }
            getData()
        }, [])

        const showBasket = () => { dispatch({type: 'showBasket'}) }
        const hideBasket = () => { dispatch({type: 'hideBasket'}) }

        return(
            <div id={'basket_container'} onMouseOver={showBasket} onMouseLeave={hideBasket} >
                <svg width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.742387 22.3L1.66003 6.7H18.34L19.2576 22.3H0.742387Z" stroke="#DCCECE" stroke-width="1.4"/>
                    <path d="M14 11V5C14 2.79086 12.2091 1 10 1V1C7.79086 1 6 2.79086 6 5V11" stroke="#DCCECE" stroke-width="1.4"/>
                </svg>
                <label id={'basket_text'}>
                    КОРЗИНА
                </label>
                <div id={'basket_amount'}>
                    <label>{products.length}</label>
                </div>
            </div>
        )
    }

    return(
        <header>
            <div id={'container_header'}>
                <div id={'logo_container'}>
                    <LogoSvg/>
                    <label id={'logo_text'}>
                        ПРЕКРАСНАЯ РАБОТА, <br/>
                        ДОСТОЙНА КАЖДОГО
                    </label>
                </div>
                <BasketHeader/>
            </div>
        </header>
    )
}