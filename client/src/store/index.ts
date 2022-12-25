import { combineReducers, createStore } from 'redux';
import { pictureReducer } from "./picture-reducer";
import {basketReducer} from "./basket-reducer";

const combineReducer = combineReducers({picture: pictureReducer, basket: basketReducer})

export const store = createStore(combineReducer)