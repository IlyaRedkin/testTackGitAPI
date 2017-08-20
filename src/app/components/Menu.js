import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Menu extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link to="/">{ this.props.brand }</Link>
                    </div>
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            { this.props.children }
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}