import * as React from 'react'
import './basket.css'
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../../models/models';

export function Basket(){

    const dispatch = useDispatch()
    const isShown = useSelector((state: any) => state.basket.isShown)
    const products = useSelector((state: any) => state.basket.products)

    const showBasket = () => { dispatch({type: 'showBasket'}) }
    const hideBasket = () => { dispatch({type: 'hideBasket'}) }

    const PictureBasket = (picture: Product) => {
        return(
            <div className={'picture-basket'}>
                <p>{picture.name}</p>
                <p>Автор: {picture.author}</p>
            </div>
        )
    }

    return(
        <div id={'basket'} className={isShown ? 'shown' : ''} onMouseOver={showBasket} onMouseLeave={hideBasket}>
            <div id={'basket-container'}>
                <h2>Корзина</h2>
                {products.map((el: Product) => (
                    <PictureBasket {...el}/>
                ))}
            </div>
        </div>
    )
}