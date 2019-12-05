import React, { Component } from 'react';
import './style.css'

function PlantCard({ name, desc, misc }) {

  return (
    <div className="card md-12">
      <div className='card-header'>
        <h3>
          <strong>
            <i aria-hidden='true' />{name}
          </strong>
        </h3>
      </div>
      <div className='card-body'>
        <div><strong>Description: </strong>{desc}</div>
        
        <div><strong>Growing Information: </strong>{misc}
        </div>
      </div>
      <button>Click To Add Plant To Garden!
        
      </button>
    </div>
  );
}

export default PlantCard;

