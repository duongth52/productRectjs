import React, { Component } from 'react';

class ProductList extends Component {
    render() {
        return (
            <div className="panel panel-default">
                <div className="panel-heading">Danh sách sản phẩm </div>
                <div className="panel-body">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã sản phẩm</th>
                                <th>Tên sản phẩm</th>
                                <th>Giá</th>
                                <th>Trạng thái</th>
                                <th>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.props.children}
                        </tbody>
                    </table>
                </div>
            </div>

        );
    }
}

export default ProductList;
