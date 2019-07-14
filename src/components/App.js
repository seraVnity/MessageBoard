import React from 'react';
import CreateCard from './CreateCard';
import CardList from './CardList';
import { list } from "../util/storage";

// FOR LOCAL STORADGE 
// localStorage.setItem('cards', JSON.stringify(cards));
// const cards = JSON.parse(localStorage.getItem('cards'));

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = { cards: [] };
  }

  render() {
    return (
    <div className='ui grid container'>
      <CreateCard />
      <h2>Объявления</h2>
      <form className='ui form'>
        <CardList cards = {list()} />
      </form>
    </div>
    
    )
  }
}

export default App;