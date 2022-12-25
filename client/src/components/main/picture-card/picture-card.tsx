import * as React from 'react'
import './picture-card.css'
import { Product } from '../../../models/models';
import { BtnDefault } from '../../elements/elements';
import { useDispatch, useSelector } from "react-redux";
import { HammerSvg } from "../../../svg/hammer.svg";

export function PictureCard(picture: Product) {

    const dispatch = useDispatch()
    const productIndex = useSelector((state: any) => state.basket.products.findIndex((el: Product) => el.id === picture.id))

    const BottomDiv = () => {
        if(picture.isSold){
            return(
                <div className={'picture-bottom-div'}>
                    <HammerSvg/>
                    <p className={'picture-info picture-sold'}>Продана на аукционе</p>
                </div>
            )
        }
        return(
            <div className={'picture-bottom-div'}>
                <p className={'picture-info picture-cost'}>{picture.cost} $</p>
                {productIndex === -1 && (
                    <BtnDefault text={'Купить'} onClick={buyPicture}></BtnDefault>
                )}
                {productIndex !== -1 && (
                    <BtnDefault text={'Убрать из корзины'} onClick={removePicture}></BtnDefault>
                )}
            </div>
        )
    }

    const buyPicture = () => dispatch({type: 'addPicture', product: picture})
    const removePicture = () => dispatch({type: 'removePicture', id: picture.id})

    return(
        <div className={'picture-card-div'}>
            <div className={'picture-bg'} style={{backgroundImage: `url("http://localhost:5000${picture.imageSrc}")`}}></div>
            <div className={'picture-container'}>
                <p className={'picture-info picture-name'}>{picture.name}</p>
                <p className={'picture-info picture-author'}>{picture.author}</p>
                <BottomDiv/>
            </div>
        </div>
    )
}