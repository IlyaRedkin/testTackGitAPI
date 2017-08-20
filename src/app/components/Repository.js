import React from 'react';
import { Link } from 'react-router';

export default class Repository extends React.Component
{
    render(){
        return (
                <ul>
                    <li>
                        {this.props.name}
                    </li>
                </ul>
        );
    }
}