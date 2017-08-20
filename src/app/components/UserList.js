import React, { Component } from 'react';
import axios from 'axios';

import User from './User';

export default class UserList extends Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            users: []
        };

        axios
            .get(`https://jsonplaceholder.typicode.com/users/`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    users: data
                });
            });
    }

    render(){
        if(!this.state.users.length){
            return null;
        }

        let users = this.state.users.map((user, index) => {
            return <User key={index} {...user} />
        });

        return (
            <div>
                {users}
            </div>
        );
    }
}