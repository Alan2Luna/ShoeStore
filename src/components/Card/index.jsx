import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import './Card.css';

const Card = ({ toggleModal }) => (
  <li className="product" onClick={toggleModal}>
    <div className="container-img">
      <img
        className="product-img"
        src="https://images1.vinted.net/t/03_015a2_U6ymHE5VB2gCtL82cJNqbZY5/310x430/1634718011.jpeg?s=33b206572169e26a0698274b660a553305ea5748"
        alt=""
      />
      <FontAwesomeIcon className="icon-add" icon={faPlusCircle} />
    </div>
    <section className="product-info">
      <p>Tacones negros</p>
      <p>talla 6</p>
      <p>precio: 6$</p>
    </section>
  </li>
);

export default Card;
