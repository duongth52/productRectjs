import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList'; 
import ProductItem from './../../components/ProductItem/ProductItem';
import {Link} from 'react-router-dom';
import API from '../../utils/callAPI';


class ProductListPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        API('GET','posts', null).then(res => {
            this.setState({
                products: res.data
            })
        })
    }

  
    index = (id) =>{
        return this.state.products.findIndex((product) =>product.id === id);
    }

    onDelete = (id) => {
        var { products } = this.state;
        API('DELETE',`posts/${id}`, null).then(res =>{
            if(res.status === 200) {
                var index = this.index(id)
                if(index === -1) return;
                products.splice(index, 1);
                this.setState({
                    products: products
                })
            }
        })
    }
    render() {
        var { products }  = this.state
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <Link to="/product-create" className="btn btn-info">Thêm sản phẩm</Link>
                <ProductList>
                    { this.showProduct(products) }    
                </ProductList> 
            </div>
        );
    }

    showProduct = (products) => {
        var result = null;
        result = products.map((product, index)=> {
            return (
                <ProductItem
                    key={index}
                    product={product}
                    index={index}
                    onDelete={this.onDelete}
                />
            );
        });
        return result;
    }
}

export default ProductListPage;
