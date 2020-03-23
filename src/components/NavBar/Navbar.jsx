import React, {useState, useEffect} from 'react';
import style from "./Navbar.module.scss"
import Button from "@material-ui/core/Button";
import {NavLink} from "react-router-dom";
import Slider from '@material-ui/core/Slider';


const Navbar = (props) => {
//Фильтр по стоимости
    let [filterValue, setFilterValue] = useState(props.maxPriceValue);

//Маркеры на фильтре
    const marks = [
        {
            value: 0,
            label: 0,
        },
        {
            value: props.maxPriceValue,
            label: props.maxPriceValue
        },
    ];

//Записываем значение инпута в локальный state
    const handleChange = (event, newValue) => {
        setFilterValue(newValue);
    };
//После нажатия применить записываем значение инпута в reducer
    const setFilterValueReducer = () => {
        props.getMaxValuePrice(filterValue)
    }


    return (
        <nav className={style.nav}>
            <NavLink to='/catalog'>
                <Button variant="contained" className={style.buttonCatalog}>Каталог</Button>
            </NavLink>

            {props.OffOnFilter && <div className={style.filterPrice}>
                <h3>Фильтр по стоимости</h3>
                <Slider

                    onChange={handleChange}
                    aria-labelledby="discrete-slider-always"
                    step={200}
                    value={filterValue}
                    min={0}
                    max={props.maxPriceValue}
                    marks={marks}
                    valueLabelDisplay="on"
                    className={style.filterPriceItem}
                />
                <Button variant="contained" className={style.priceButton} onClick={() => {
                    setFilterValueReducer()
                }}>Применить</Button>
            </div>}


        </nav>
    );
}


export default Navbar
