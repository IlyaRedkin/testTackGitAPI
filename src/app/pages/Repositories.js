import React, {Component} from 'react';
import UserProfile from '../components/User';
import axios from 'axios';

export default class User extends Component {

    constructor()
    {
        super(...arguments);
        this.state = {
            user: null
        };

        axios.get(`https://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    user: data
                });
            });
    }

    render() {
        // if(this.state.user === null){
        //     return null;
        // }

        return (
            <div>
                {this.state.user && <UserProfile {...this.state.user} />}
            </div>
        );
    }
}