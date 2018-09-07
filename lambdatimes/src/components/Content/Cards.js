import React, { Component } from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

/* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop*/

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map(card => <Card card={card}/>)}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.shape({
    card: PropTypes.string,
  })
};

// this one idk if i got right either ^^^

export default Cards;