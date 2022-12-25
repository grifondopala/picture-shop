import { Product } from '../models/models';
import axios from 'axios';

const basket = {
    products: [] as Product[],
    isShown: false,
}

export const basketReducer = (state = basket, action: any) => {
    switch(action.type) {
        case 'setBasket':
            return {...state, products: action.products}
        case 'addPicture':
            return {...state, products: [...state.products, action.product]}
        case 'removePicture':
            return {...state, products: state.products.filter((el: Product) => el.id !== action.id)}
        case 'showBasket':
            return {...state, isShown: true}
        case 'hideBasket':
            return {...state, isShown: false}
        default:
            return {...state}
    }
}

export const fetchBasket = async (dispatch: any, userIp: string) => {
    return await axios.post('http://localhost:5000/basket/getBasket', {userIp})
        .then((res) => dispatch({type: 'setBasket', products: res.data.products}))
}