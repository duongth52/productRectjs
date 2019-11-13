import React, { Component } from 'react';
import {Route, Link } from 'react-router-dom';
const menus = [
    {
        name: 'Trang Chủ',
        to: '/',
        exact: false
    },
    {
        name: 'Danh Sách Sản Phẩm',
        to: '/product-list',
        exact: false
    },
    {
        name: 'Thêm Sản Phẩm',
        to: '/product-create',
        exact: false
    }
];

const MenuLink = ({label, to, exact}) => {
    return (
        <Route
            path={to}
            exact={exact}
            children={({match})=>{
                var active = match ? 'active' : ''
                return (
                    <li className={active}>
                        <Link className="nav-link" to={to}>{label}</Link>
                    </li>
                );
            }}
        />
    );
} 

class Menu extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm bg-light">
                <ul className="navbar-nav">
                    { this.showMenu(menus) }
                </ul>
            </nav>
        );
    }


    showMenu = (menus) => {
        var reuslt = null;
        if(menus.length > 0) {
            reuslt = menus.map((menu, index)=>{
                return(
                    <MenuLink
                        key={index}
                        label={menu.name}
                        to={menu.to}
                        exact={menu.exact}
                    />
                );
            });
        }
        return reuslt;
    }
}

export default Menu;
