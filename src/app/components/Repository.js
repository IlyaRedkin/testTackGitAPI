import React from 'react';
import { Link } from 'react-router';

export default class Repository extends React.Component
{
    render(){
        return (
                <ul>
                    <li>
                        <Link to={`/${this.props.owner.login}/${this.props.name}`}>
                            {this.props.name}
                        </Link>
                    </li>
                </ul>
        );
    }
}