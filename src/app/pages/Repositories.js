import React, {Component} from 'react';
import axios from 'axios';

import Repository from '../components/Repository';

export default class Repositories extends Component {

    constructor()
    {
        super(...arguments);
        this.state = {
            repository: []
        };

        axios
            .get(`https://api.github.com/users/GoogleChrome/repos`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    repository: data
                });
            });
    }

    render() {

        let repos = this.state.repository.map((repositories, index) => {
        return <Repository key={index} {...repositories} />
        });

        return (
            <div>
                <h1>Repositories list</h1>
                {repos}
            </div>
        );
    }
}