import * as React from 'react'
import axios from 'axios';

import { Filter, Search } from '../elements/elements';
import { Product } from '../../models/models';
import { PictureCard } from './picture-card/picture-card';
import { useDispatch, useSelector } from "react-redux";
import { fetchAllPictures, fetchSoldPictures } from "../../store/picture-reducer";

import './main.css'

const changeFilterT = (text: string) => {}
export const FilterContext = React.createContext({changeFilter: changeFilterT});
export const SearchContext = React.createContext({searchPictures: changeFilterT});

export function Main(){

    const dispatch = useDispatch()

    const allPictures = useSelector((state: any) => state.picture.allPictures)
    const soldPictures = useSelector((state: any) => state.picture.soldPictures)
    const [pictures, setPictures] = React.useState<Array<Product>>([]);

    const [filterValue, setFilterValue] = React.useState('Все');

    const changeFilter = (name: string) => setFilterValue(name);
    const searchPictures = (searchValue: string) => {
        const data = {type: filterValue === 'Все'? 0 : 1, substring: searchValue};
        axios.post(`http://localhost:5000/products/search`, data)
            .then(res => {
                setPictures(res.data)
            })
    }

    React.useEffect(() => {
        fetchAllPictures(dispatch).then((res) => setPictures(res.data))
        fetchSoldPictures(dispatch)
    }, [])

    React.useEffect(() => {
        filterValue === 'Все' ? setPictures(allPictures) : setPictures(soldPictures);
    }, [filterValue])

    return(
        <main>
            <div id={'main-nav-div'}>
                <FilterContext.Provider value={{changeFilter}}>
                    <Filter text={'Все'} active={filterValue === 'Все'}/>
                    <Filter text={'Проданные на аукционе'} active={filterValue === 'Проданные на аукционе'}/>
                </FilterContext.Provider>
                <SearchContext.Provider value={{searchPictures}}>
                    <Search/>
                </SearchContext.Provider>
            </div>
            <div id={'pictures-div'}>
                {pictures.map((el: Product) => (
                    <PictureCard key={el.id} {...el}/>
                ))}
            </div>
        </main>
    )
}