import React, { Component } from 'react';
import API from '../../utils/callAPI';

class ProductActionPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            price: '',
            status: false
        }
    }

    onChange = (event) => {
        var target = event.target;
        var name = target.name;
        var value = target.type === 'checkbox' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    onSave = (e) => {
        e.preventDefault();
        var {history} = this.props;
        var {id, name, price, status } =  this.state;
        var data = {};
        if(id) {
            data = {
                id: id,
                name: name,
                price: price,
                status: status
            }
            API('PUT', `posts/${id}`, data).then(res => {
                history.push('/product-list');
            });

            return;
        }
        data = {
            name: name,
            price: price,
            status: status
        }
        API('POST', 'posts', data).then(res => {
            history.push('/product-list');
        });
    }

    componentDidMount() {
        var { match } = this.props;
        if(match) {
            var id = match.params.id;
            API('GET', `posts/${id}`, null).then(res => {
                this.setState({
                    id: res.data.id,
                    name: res.data.name,
                    price: res.data.price,
                    status: res.data.status
                });
            });
        }
        }

    render() {
        var {price, name, status} = this.state;
        return (
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <form onSubmit= {this.onSave}>
                    <fieldset className="form-group">
                        <label >Tên sản phẩm</label>
                        <input type="text" 
                                className="form-control" 
                                id="first_name" 
                                name="name"
                                value={name}
                                onChange={this.onChange}
                                />
                    </fieldset>
                    <fieldset className="form-group">
                        <label>Giá</label>
                        <input type="text" 
                            className="form-control" 
                            id="last_name" 
                            name="price"
                            value={price}
                            onChange={this.onChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input type="checkbox" id="last_name" 
                            name="status"
                            value={status}
                            onChange={this.onChange}
                            checked={status}
                         /> Còn hàng
                    </fieldset>
                    <button type="submit" className="btn btn-primary">Thêm</button>
                </form>
            </div>
            );
        }            
}
                
export default ProductActionPage;
