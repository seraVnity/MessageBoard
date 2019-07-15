import React from 'react';
import CreateCard from './CreateCard';
import CardDetails from './CardDetails';
import { list } from "../util/storage";


class App extends React.Component {
  constructor (props) {
      super(props);
      this.state = {};
  }
  updateCard = (cardId) => {
    this.setState({cardId})
  };

  render() {
    const cards = list().map((card) => {
      return <CardDetails onCardUpdate={this.updateCard} key={card.id} card={card}/>
    });
    return (
    <div className='ui grid container'>
      <CreateCard updateCardId={this.state.cardId} />
      <form className='ui grid'>
        <h2 className="header sixteen wide column">Объявления</h2>
        <div className='ui grid'>{cards}</div>
      </form>
    </div>
    );
  }
}

export default App;