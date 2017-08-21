import React from 'react';
import axios from 'axios';
import Contributor from '../components/Contributor';

export default class Contributors extends React.Component {

    constructor()
    {
        super(...arguments);
        this.state = {
            user: []
        };

        axios.get(`https://api.github.com/repos/${this.props.params.userId}/${this.props.params.userRepos}/contributors`)
            .then((response) => {
                let { data } = response;

                this.setState({
                    user: data
                });
            });
    }

    render() {
        let contrib = this.state.user.map((repositories, index) => {
            return <Contributor key={index} {...repositories} />
        });


        return (
            <div>
                {contrib}
            </div>
        );
    }
}