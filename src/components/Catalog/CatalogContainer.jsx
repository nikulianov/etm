import React, {Component} from 'react';
import {connect} from "react-redux";
import style from "./ProductCart.module.scss";
import Grid from "@material-ui/core/Grid";
import ProductCart from "./ProductCart";
import {getFilterValue} from "../../redux/catalog-reducer";



class CatalogContainer extends Component {

    componentDidMount() {
        //Включаем фильтр по стоимости, если мы находимся в каталоге
        this.props.getFilterValue(true)
    }

    render() {
//Фильтруем карточки товара в зависимости от значение фиттра по стоимости
        return (
            <Grid container spacing={0} justify="space-between" className={style.mainContent}>

                {this.props.catalog.map(key => {
                    if (this.props.filterValuePrice && this.props.filterValuePrice >= key.price) {
                        return <ProductCart key={key.id} {...this.props} catalog={key}/>
                    }
                })}



            </Grid>
        )
    }
}

const mapStateToProps = (state) => ({
    catalog: state.catalog.catalogItem,
    filterValuePrice: state.catalog.filterValuePrice
})


export default connect(mapStateToProps, {getFilterValue})(CatalogContainer)



