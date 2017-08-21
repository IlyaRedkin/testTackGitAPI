import React from 'react';
import axios from 'axios';
import Repository from '../components/Repository';

export default class Repositories extends React.Component {

    constructor()
    {
        super(...arguments);
        this.state = {
            repositoreis: []
        };

        axios.get(`https://api.github.com/users/${this.props.params.userId}/repos`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    repositoreis: data
                });
            });
    }

    render() {
        let repos = this.state.repositoreis.map((repositories, index) => {
            return <Repository key={index} {...repositories} />
        });

        return (
            <div>
                {repos}
            </div>
        );
    }
}