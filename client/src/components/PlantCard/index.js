import React, { Component } from 'react';
import axios from 'axios'

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
      <div className='card-body'>{desc}
        <div className='description'>
          {misc}
        </div>

      </div>
    </div>
  );
}

export default PlantCard;

