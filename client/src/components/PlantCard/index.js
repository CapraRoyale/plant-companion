import React, { Component } from 'react';
import './style.css';
import Button from '../Home/index'

function PlantCard({ name, desc, misc }) {

  return (
<<<<<<< HEAD
    <div class="mui--z1">
      <div className="card md-12">
        <div className='card-header'>
          <h3>
            <strong>
              <i aria-hidden='true' />{name}
            </strong>
          </h3>
        </div>
        <div className='card-body'>{desc}
          <div className='description'>
            {misc}
          </div>

        </div>
=======
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
>>>>>>> daa6a0639db80500d4f269efa87340284bea8db6
      </div>
      {/* <Button /> */}
    </div>
  );
}

export default PlantCard;

