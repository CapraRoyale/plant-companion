import React from 'react';
import Navigation from '../Navigation'
import { Link } from 'react-router-dom'
import * as ROUTES from '../../constants/routes'
import "./style.css";

const Landing = () => (

    <div>
        <h1>Landing</h1>
        <div>
            <button>
                <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
            </button>
            <button>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
            </button>
        </div>
    </div>

);

export default Landing;

{/* card template to use for plant listing*/}

{/* <Card>
  <Card.Header as="h5">Featured</Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
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

