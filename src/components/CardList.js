import React from 'react';
import CardDetails from './CardDetails';

const CardList = (props) => {

  const cards = props.cards.map((card) => {
    console.log(card);
    return <CardDetails key={card.id} card = {card} />
  });
  return <div className='ui grid'>{cards}</div>
}


export default CardList;