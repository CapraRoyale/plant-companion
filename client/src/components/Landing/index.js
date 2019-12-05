import React, { Component } from 'react';
import "./style.css";
import SignInButton from '../SignInButton';
import SignUpButton from '../SignUpButton';
import LogoCondensed from '../logocondensed';
import Logo from '../logo'
import PlantCard from '../PlantCard'
import API from '../../utils/API';
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'

// const Landing = () => (

//     <div>
//         <LogoCondensed />
//         <SignInButton />
//         <SignUpButton />
//         <hr/>
//         <div>
//             <Logo />
//         </div>
//     </div>
// );

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
        <Logo className='logo' />
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

// // super bitchin' simple search code
// // https://codepen.io/hoehoe/pen/dReKLX

// {/* card template to use for plant listing*/ }

// {/* <Card>
//   <Card.Header as="h5">Featured</Card.Header>
//   <Card.Body>
//     <Card.Title>Special title treatment</Card.Title>
//     <Card.Text>
//       With supporting text below as a natural lead-in to additional content.
//     </Card.Text>
//     <Button variant="primary">Go somewhere</Button>
//   </Card.Body>
// </Card> */}
// ______________________________

// collapsing button for information on plant card:

// function Example() {
//     const [open, setOpen] = useState(false);

//     return (
//       <>
//         <Button
//           onClick={() => setOpen(!open)}
//           aria-controls="example-collapse-text"
//           aria-expanded={open}
//         >
//           click
//         </Button>
//         <Collapse in={open}>
//           <div id="example-collapse-text">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
//             terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
//             labore wes anderson cred nesciunt sapiente ea proident.
//           </div>
//         </Collapse>
//       </>
//     );
//   }

//   render(<Example />);

