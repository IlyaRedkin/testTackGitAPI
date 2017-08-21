import React from 'react';
import axios from 'axios';

import User from '../components/User';

export default class UserList extends React.Component
{
    constructor()
    {
        super(...arguments);

        this.state = {
            users: []
        };

        axios
            .get(`https://api.github.com/users?per_page=50`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    users: data
                });
            });
    }

    render(){
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