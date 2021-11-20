import React from 'react';
import './ListOfCards.css'

const ListOfCards = ({ children }) => (
  <ul className="cards-container">{children}</ul>
);

export default ListOfCards;
