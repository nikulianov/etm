import React from 'react';
import style from './ProductInfo.module.scss'
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Preloader from "../../common/Preloader";

const ProductInfo = (props) => {

    if (!props.product) {
        return <Preloader/>
    }

    return (

        <Grid container spacing={0} className={style.ProductInfoContent}>

            <Grid item xs={12} md={6} lg={4} xl={4} className={style.imgBlock}>

                <img src={props.product.img} alt=""/>

            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={4} className={style.ProductInfoList}>
                <div className={style.title}>{props.product.title}</div>
                <ul>
                    <li><span>Код:</span> <span>{props.product.id}</span></li>
                    <li><span>Упаковки:</span> <span>{props.product.pack} шт.</span></li>
                    <li><span>Поставщик:</span> <span>{props.product.vendor}</span></li>
                    <li><span>Размер:</span> <span>20х12х54</span></li>
                    <li><span>Материал:</span> <span>Сталь</span></li>
                    <li><span>Цвет:</span> <span>Белый</span></li>
                </ul>
            </Grid>

            <Grid item xs={12} md={6} lg={4} xl={4}className={style.priceBlock}>
                <div className={style.price}>Цена: {props.product.price} <span>руб.</span></div>
                <Button variant="contained" className={style.priceButton}>Купить</Button>
            </Grid>

        </Grid>

    );
}


export default ProductInfo