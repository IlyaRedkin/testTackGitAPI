import React from 'react';

export default class Contributor extends React.Component
{

    render(){
        return (
                <ul>
                    <li>
                        {this.props.login}
                    </li>
                </ul>
        );
    }
}