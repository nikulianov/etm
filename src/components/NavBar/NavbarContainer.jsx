import React, {Component} from 'react';
import Navbar from "./Navbar";
import {connect} from "react-redux";
import {getMaxValuePrice} from "../../redux/catalog-reducer";


class NavbarContainer extends Component {
//Вычисляем максимальное значение цены массива и заносим его в фильтр по стоимости
    allPriceCatalog = this.props.catalog.map(p => p.price);
    maxPriceValue = Math.max.apply(null, this.allPriceCatalog)

    render() {

        return (
            <Navbar maxPriceValue={this.maxPriceValue} OffOnFilter={this.props.OffOnFilter} getMaxValuePrice={this.props.getMaxValuePrice}/>
        )
    }

}

let mapStateToProps = (state) => ({
    catalog: state.catalog.catalogItem,
    OffOnFilter: state.catalog.OffOnFilter

})

export default connect(mapStateToProps, {getMaxValuePrice})(NavbarContainer)
