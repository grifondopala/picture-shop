import * as React from 'react'
import './elements.css'
import { useContext } from 'react';
import {FilterContext, SearchContext} from '../main/main';

interface BtnProps {
    text: string;
    onClick: () => void;
}

interface FilterProps {
    text: string;
    active: boolean;
}

export function BtnDefault(props: BtnProps) {
    return(
        <button className={'btn_default'} onClick={props.onClick}>
            {props.text}
        </button>
    )
}

export function BtnPrimary(props: BtnProps) {
    return(
        <button className={'btn_primary'}>
            <div className={'container'}>
                {props.text}
                <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.3278 1.22527L5.42967 10.6529L1.14441 6.60827" stroke="#1B1717" stroke-width="2"/>
                </svg>
            </div>
        </button>
    )
}

export function Filter(props: FilterProps) {

    const filter = useContext(FilterContext);

    return(
        <button className={`filter ${props.active ? 'active' : ''}`} onClick={() => filter.changeFilter(props.text)}>
            {props.text}
        </button>
    )
}

export function Search() {

    const searcher = useContext(SearchContext)
    const [searchValue, setSearchValue] = React.useState('');

    return(
        <div className={'search_div'}>
            <div className={'container'}>
                <input placeholder={'Поиск по названию картины'} onInput={(e) =>
                    setSearchValue((e.target as HTMLInputElement).value)}/>
                <button onClick={() => searcher.searchPictures(searchValue)}>
                    <div>
                        НАЙТИ
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g>
                                <circle cx="6" cy="6" r="5.3" stroke="#DCCECE" stroke-width="1.4"/>
                                <path d="M10 10L13 13" stroke="#DCCECE" stroke-width="1.4"/>
                            </g>
                        </svg>
                    </div>
                </button>
            </div>
            <div id={'search_line'}/>
        </div>
    )
}