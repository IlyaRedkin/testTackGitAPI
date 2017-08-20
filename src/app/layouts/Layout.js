import React from 'react';

import Menu from '../components/Menu';
import MenuItem from '../components/MenuItem';
import Footer from '../components/Footer';

export default class Layout extends React.Component
{
    constructor()
    {
        super(...arguments);
        this.brand = 'ReactBlog';
    }

    isActive(href){
        return window.location.pathname === href;
    }

    render()
    {
        return (
            <div>
                <Menu brand={this.brand}>
                    <MenuItem href="/" active={this.isActive('/')} title="Главная" />
                    <MenuItem href="/b" active={this.isActive('/b')} title="B" />
                    <MenuItem href="/c" active={this.isActive('/c')} title="C" />
                    <MenuItem href="/users" active={this.isActive('/users')} title="Пользователи" />
                    <MenuItem href="/comments" active={this.isActive('/comments')} title="Комментарии" />
                </Menu>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            { this.props.children }
                        </div>
                    </div>
                </div>
                <Footer brand={this.brand} />
            </div>
        );
    }
}