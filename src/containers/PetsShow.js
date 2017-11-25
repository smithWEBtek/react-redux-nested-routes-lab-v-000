import React from 'react';
import { connect } from 'react-redux';

const PetsShow = ({ pet }) => 
  <div className="col-md-8">
    <h2>{pet.name}</h2>
    <p>{pet.description}</p>
  </div>;

const mapStateToProps = (state, ownProps) => {
  const pet = state.pets.find(pet => pet.id == ownProps.match.params.petId)
  // const pet = state.pets.find(pet => pet.id.toString() === ownProps.match.params.petId)

  console.log('state: ', {state})
  console.log('state.pets: ', state.pets)
  console.log('ownProps.match.url: ', ownProps.match.url)

  if(pet) {
    console.log("pet: ", {pet})
    return { pet }
  } else {
    return { pet: {} }
  }
};

export default connect(mapStateToProps)(PetsShow);
