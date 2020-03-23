import React, {Component} from 'react';
import {connect} from "react-redux";
import ProductInfo from "./ProductInfo";
import {compose} from "redux";
import {withRouter} from "react-router-dom";
import {getActiveProduct, getFilterValue} from "../../redux/catalog-reducer";


class ProductContainer extends Component {

    initiateActiveProduct = () => {
        //берем значение ID активной карточки продукта из URL
        let productId = this.props.match.params.productId;
        let productItem = this.props.catalog.filter(c => productId === c.id);
        //Заносим нужный товар в переменну в Reducer
        this.props.getActiveProduct(productItem);
        //Отключаем фильтр по стоимости во время просмора карточки товара
        this.props.getFilterValue(false)

    }

    componentDidMount() {
        this.initiateActiveProduct();
    }

    render() {
        return (

            <ProductInfo product={this.props.activeProduct? this.props.activeProduct[0]: null}/>
        )
    }
}

const mapStateToProps = (state) => ({
    catalog: state.catalog.catalogItem,
    activeProduct: state.catalog.activeProduct
})

export default compose(
    withRouter,
    connect(mapStateToProps, {getActiveProduct,getFilterValue})
)(ProductContainer)




