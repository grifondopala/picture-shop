import { Product } from '../models/models';
import axios from 'axios';

const pictures = {
    allPictures: [] as Product[],
    soldPictures: [] as Product[],
}

export function pictureReducer(state = pictures, action: any){
    switch (action.type){
        default:
            return {...state}
        case 'setAllPictures':
            return {...state, allPictures: action.array}
        case 'setSoldPictures':
            return {...state, soldPictures: action.array}
    }
}

export const fetchAllPictures = async (dispatch: any) => {
    return await axios.get(`http://localhost:5000/products/getAll/`)
        .then((res) => {
            dispatch({type: 'setAllPictures', array: res.data})
            return res
        })
}
export const fetchSoldPictures = async (dispatch: any) => {
    return await axios.get(`http://localhost:5000/products/getSold/`)
        .then((res) => dispatch({type: 'setSoldPictures', array: res.data}))
}