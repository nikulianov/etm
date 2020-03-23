import React from 'react';

import style from "./ProductCart.module.scss";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";




const ProductCatalog = (props) => {

    return (


                <Grid item xs={12} md={6} lg={6} className={style.catalogItemBlock}>
                    <div className={style.imgBlock}>
                        <NavLink to={'/catalog/'+props.catalog.id}>
                        <img src={props.catalog.img} alt=""/>
                        </NavLink>
                    </div>

                    <div className={style.infoItem}>
                        <div className={style.title}>{props.catalog.title}</div>

                        <ul className={style.infoItemList}>
                            <li><span>Код:</span> <span>{props.catalog.id}</span></li>
                            <li><span>Упаковки:</span> <span>{props.catalog.pack} шт.</span></li>
                            <li><span>Поставщик:</span> <span>{props.catalog.vendor}</span></li>
                        </ul>

                        <div className={style.price}>Цена: {props.catalog.price} <span>руб.</span></div>
                        <NavLink to={'/catalog/'+props.catalog.id}>
                            <Button className={style.moreInfoButton} variant="contained">Подробнее</Button>
                        </NavLink>

                    </div>

                </Grid>


    );
}


export default ProductCatalog
