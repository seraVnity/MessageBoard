import React from "react";
import { add } from "../util/storage";
import { validateTitle, validateText, validatePhone } from "../util/validation";
import CardValidation from "./CardValidation";
import './CreateCards.css';

const initialState = {
  title: "",
  text: "",
  phone: "",
  titleValidationText: 'Обязательное поле (не более 140 символов)',
  titleIsValid: undefined,
  textValidationText: 'Не более 300 символов',
  textIsValid: undefined,
  phoneValidationText: 'Обязательное поле',
  phoneIsValid: undefined,

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
    console.log(this.props);
  };

  handleTitle = (e) => {
    const title = e.target.value;
    const validation = validateTitle(title);
    this.setState({ 
      title: title,
      titleValidationText: validation.text,
      titleIsValid: validation.isValid
    });
  }

  handleText = (e) => {
    const text = e.target.value;
    const validation = validateText(text);
    this.setState({ 
      text: text,
      textValidationText: validation.text,
      textIsValid: validation.isValid
    })
  }

  handlePhone = (e) => {
    const phone = e.target.value;
    const validation = validatePhone(phone);
    this.setState({ 
      phone: phone,
      phoneValidationText: validation.text,
      phoneIsValid: validation.isValid
    })
  }


  render() {
    // const { title, text, phone, photo } = this.props;
    let formValid = false;
    if (this.state.titleIsValid === true && this.state.phoneIsValid === true) {
      formValid = true;
    }
    return (
      <form className="ui form grid" onSubmit={this.addCard}>
        <h2 className="header">Подать объявление</h2>
        <div className="required field ten wide column">
          <label>Заголовок</label>
            <textarea
              type="text"
              rows="1"
              maxLength="140"
              name="title"
              value={this.state.title}
              onChange={this.handleTitle}
            />
        </div>
        <CardValidation text = {this.state.titleValidationText} isValid = {this.state.titleIsValid} />
        <div className="field ten wide column">
          <label>Текст объявления</label>
            <textarea
              type="text"
              maxLength="300"
              name="text"
              value={this.state.text}
              onChange={this.handleText}
            />
        </div>
        <CardValidation text = {this.state.textValidationText} isValid = {this.state.textIsValid} />
        <div className="required field ten wide column">
          <label>Телефон</label>
            <input
              type="tel"
              name="phone"
              placeholder="+7 (___) ___-__-__"
              rows="1"
              value={this.state.phone}
              onChange={this.handlePhone}
            />
        </div>
        <CardValidation text = {this.state.phoneValidationText} isValid = {this.state.phoneIsValid} />
        <div className="field">
          <div className="field seven wide column">
            <label htmlFor='upload-photo' className="photoLabel ui blue button">Прикрепить фото</label>
            <input
              // value={this.state.cards.photo}
              type="file"
              name="photo"
              id="upload-photo"
              style={{display:'none'}}
            />
          </div>
          <div className="field four wide column">
            <button className="ui blue button " value="submit" disabled={!formValid}>
              Подать
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default CreateCard;
