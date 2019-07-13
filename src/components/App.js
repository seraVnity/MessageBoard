import React from 'react';
import CardDetails from './CardDetails';
import CreateCard from './CreateCard';
import CardList from './CardList';
import { list } from "../storage/storage";

// FOR LOCAL STORADGE 
// localStorage.setItem('cards', JSON.stringify(cards));
// const cards = JSON.parse(localStorage.getItem('cards'));

class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = { cards: [] };
  }

//   deleteCard = (title) => {
//     console.log(title)
//   };

  render() {
    return (
    <div className='ui container'>
      <CreateCard />
      <h1>Объявления</h1>
      <form className='ui form'>
        <CardList cards = {list()} />
      </form>
    </div>
    
    )
  }
}

export default App;