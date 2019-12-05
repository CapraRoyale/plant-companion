import React, { Component } from 'react';
import './style.css';
import Button from '../Home/index'

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
      {/* <Button /> */}
    </div>
  );
}

export default PlantCard;

