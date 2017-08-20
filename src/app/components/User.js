import React from 'react';

export default class User extends React.Component
{
    render(){
        return (
                <ul>
                    <li>{this.props.login}</li>
                </ul>
        );
    }
}