import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component
{
    render(){
        return (
            <ul>
                <li>
                    <Link to={`/${this.props.login}`}>
                        {this.props.login}
                    </Link>
                </li>
            </ul>
        );
    }
}