import React from 'react';
import SignOutButton from "../SignOut"
import "./style.css";
import LogoCondensed from '../logocondensed'

const Home = () => (
    <div>
        <LogoCondensed />
        <SignOutButton />
        <hr/>
        <div>
            <link href="components/home/css/index.css" rel="stylesheet" />
            <h1> plant and companion</h1>
            <form className="searchform">
                <input type="text" placeholder="Search..." name="search" />
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
)

export default Home;

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

