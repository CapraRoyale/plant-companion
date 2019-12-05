import React, { Component } from 'react';
import "./style.css";
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import LogoCondensed from '../logocondensed';
import PlantCard from '../PlantCard'
import API from '../../utils/API';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

class Landing extends Component {
  state = {
    plants: [],
    q: '',
    message: ''
  };

  componentDidMount() {
    // TODO: API call to 
    this.getPlants()
    console.log(this.state.plants)
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
    API.addToGarden({
      plantId: plant.id,
      // name: plant.name,
      // desc: plant.desc,
      // misc: plant.misc,
      userId: 1
    }).then(() => this.getPlants());
  };
  render() {
    return (
      <div>
        <LogoCondensed />
        <SignInButton />
        <SignUpButton />
        <hr />
        <button className="backtohomebtn">
          <Link to={ROUTES.HOME}>Head back to the Garden!!</Link>
        </button>

        
        {this.state.plants.map(plant => (
          <PlantCard
            key={plant.id}
            name={plant.name}
            desc={plant.desc}
            misc={plant.misc}
            plantId={plant.id}
            buttonText="Add To Garden"
            handlePlantSave={this.handlePlantSave}
          />
        ))};


      </div>
    )
  }

}

export default Landing;