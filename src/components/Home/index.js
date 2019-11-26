import React from 'react';
import './index.css';

function Home() {
  return (

    <div>
      <link href="components/home/css/index.css" rel="stylesheet" />
      <h1> plant and companion</h1>

      <form className="searchform">
        <input type="text" placeholder="Search..." name="search" />
        <button type="submit">Submit</button>
      </form>

    </div>
  )

}

export default Home;