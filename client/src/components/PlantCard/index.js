import React, { Component } from 'react';
import axios from 'axios'
import './style.css';
import Button from '../Home/index'


function PlantCard(props) {


  return (
    <div className="card md-12">
      <div className='card-header'>
        <h3>
          <strong>
            <i aria-hidden='true' />{props.name}
          </strong>
        </h3>
      </div>
      <div className='card-body'>
        <div><strong>Description: </strong>{props.desc}</div>
        <div>
          <strong>Growing Information: </strong>{props.misc}
        </div>

      </div>
      <button onClick={() =>  props.handlePlantSave(props.plantId)}>
        {props.buttonText}</button>

    </div>
  );
}

export default PlantCard;