import React from 'react';

import MenuItem from '../components/MenuItem';
import Menu from "../components/Menu";
export default class Layout extends React.Component
{
    constructor()
    {
        super(...arguments);
    }

    render()
    {
        return (
            <div>
                <Menu>
                    <MenuItem href="/" title="Пользователи" />
                    <MenuItem href="/repos" title="Репозитории" />
                    <MenuItem href="/collabor" title="Коллабораторы" />
                </Menu>
                { this.props.children }
            </div>

        );
    }
}