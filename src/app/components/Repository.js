import React from 'react';
import { Link } from 'react-router';

export default class User extends React.Component
{
    render(){
        return (
                <ul>
                    <Link to={`/${this.props.login}/${this.props.repos_url}`}>
                        {this.props.login}
                    </Link>
                </ul>
        );
    }
}