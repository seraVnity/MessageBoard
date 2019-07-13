import React from "react";
import { add } from "../storage/storage";

const initialState = {
  title: '',
  text: '',
  phone: ''
};

class CreateCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    // this.addCard = this.addCard.bind(this)
  }
  //ADD CARD TO LOCAL STORAGE
  addCard = () => {
    // event.preventDefault();
    const card = this.state;
    add(card);
//Reset the state
    this.setState(initialState);
  }

  render() {
    // const { title, text, phone, photo } = this.props;
    return (
      <form className="ui form" onSubmit={this.addCard}>
        <h2>Подать объявление</h2>
        <div className="field">
          <label>Заголовок</label>
          <textarea
            type="text"
            rows="1"
            maxLength="140"
            required
            name="title"
            value={this.state.title}
            onChange={(e) => this.setState({ title: e.target.value })} 
          />
        </div>
        <div className="field">
          <label>Текст объявления</label>
          <textarea
            type="text"
            maxLength="300"
            name="text" 
            value={this.state.text}
            onChange={(e) => this.setState({ text: e.target.value })} 
          />
        </div>
        <div className="field">
          <label>Телефон</label>
          <textarea
            type="tel"
            name="phone"
            placeholder="+7 (___) ___-__-__"
            pattern="7\([0-9]{3}\)[0-9]{3}-[0-9]{2}-[0-9]{2}"
            rows="1"
            required
            value={this.state.phone}
            onChange={(e) => this.setState({ phone: e.target.value })} 
          />
        </div>
        <div className="field">
          <input
            // value={this.state.cards.photo}
            className="ui blue basic button"
            type="file"
            placeholder="Прикрепить фото"

          />
        </div>
      <button className="ui blue button" value="submit">Подать</button>
      </form>
    );
  }
}

export default CreateCard;
