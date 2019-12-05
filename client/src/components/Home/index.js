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

    handlePlantSave = id => {
        const plant = this.state.plants.find(plant => plant.id === id);
        API.searchPlant({
            plantId: plant.id,
            name: plant.name,
            desc: plant.desc,
            misc: plant.misc

        });
    }

    handlePlantClick = event => {
        event.preventDefault();
        // this.getPlants()
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
                        Button={() => (
                            <button 
                            onClick={() => this.handlePlantSave(plant.id)
                            .then(() => this.handlePlantClick())}
                            className="btn btn-primary ml-2">
                                Add Plant
                            </button>
                        )}
                        
                    />
                ))}


            </div>
        )
    }

}

export default Home;

