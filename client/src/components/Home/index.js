import React, { Component } from 'react';
import "./style.css";
import LogoCondensed from '../logocondensed';
import Logo from '../logo'
import PlantCard from '../PlantCard'
import API from '../../utils/API';
import SignOutButton from '../SignOut'

class Home extends Component {
    state = {
        plants: [],
        q: '',
        message: ''
    };

    componentDidMount() {
        // TODO: API call to 
        this.getPlants()
    }

    getPlants = () => {
        API.getPlants()
            .then(res => {
                console.log(res.data)
                this.setState({
                    plants: res.data
                })
            }
            )
            .catch(() =>
                this.setState({
                    plants: [],
                    message: 'You Got No Plants'
                })
            );
    }

    render() {
        return (
            <div>
                <LogoCondensed />
                <SignOutButton />
                <hr />

                <strong>
                    <h1>Save Your Plants Here!</h1>
                </strong>

                <hr/>

                {this.state.plants.map(plant => (
                    <PlantCard
                        key={plant.id}
                        name={plant.name}
                        desc={plant.desc}
                        misc={plant.misc}
                    />
                ))}


            </div>
        )
    }

}

export default Home;

