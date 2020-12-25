import React, { Component } from 'react';
import "./style.css";
import LogoCondensed from '../logocondensed';
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
        console.log(this.state.plants)
        // TODO: API call to 
        this.getPlants()
    }

    getPlants = () => {
        API.getUserGarden()
            .then(res => {
                console.log(res.data)
                this.setState({
                    plants: res.data.plants
                })
            })
            .catch(() =>
                this.setState({
                    plants: [],
                    message: 'You Got No Plants'
                })
            );
    };

    handlePlantSave = id => {
        const plant = this.state.plants.find(plant => plant.id === id);
        API.deletePlant({
            plantId: plant.id,
            // name: plant.name,
            // desc: plant.desc,
            // misc: plant.misc
        }).then(() => this.getPlants());
    };

    handlePlantClick = event => {
        event.preventDefault();
        this.getPlants();
    };

    render() {
        console.log(this.state.plants)
        return (
            <div>
                <LogoCondensed />
                <SignOutButton />
                <hr />

                <strong>
                    <h1>Save Your Plants Here!</h1>
                </strong>

                <hr />
        
                        {this.state.plants.map(plant => (
                            <PlantCard
                                key={plant.id}
                                name={plant.name}
                                desc={plant.desc}
                                misc={plant.misc}
                                plantId={plant.id}
                                buttonText='Remove'
                                handlePlantSave={this.handlePlantSave}
                            />
                        ))}
            </div>
        )
    }
}

export default Home;

