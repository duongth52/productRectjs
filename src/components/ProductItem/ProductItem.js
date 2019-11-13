import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class ProductItem extends Component {
    

    onDelete = (id) => {
        this.props.onDelete(id);
    }

    render() {
        var {product, index} = this.props;
        var status = product.status ? {name: 'Còn hàng', statusClass: 'warning'} :  {name: 'Hết hàng', statusClass: 'danger'};

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`badge badge-${status.statusClass}`}>{status.name}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-success mr-10">Sửa</Link>
                    <button onClick={() => this.onDelete(product.id)} type="button" className="btn btn-danger">Xóa</button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
