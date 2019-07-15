import React from "react";
import { add, get, update } from "../util/storage";
import { getBase64 } from "../util/image";
import { validateTitle, validateText, validatePhone } from "../util/validation";
import CardValidation from "./CardValidation";
import './CreateCards.css';

const initialState = {
  title: "",
  text: "",
  phone: "",
  photo: undefined,
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
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.updateCardId !== this.state.updateCardId) {
      const updateCardId = this.props.updateCardId;
      const cardToUpdate = get(updateCardId);
      this.setState({
        title: cardToUpdate.title,
        text: cardToUpdate.text,
        phone: cardToUpdate.phone,
        photo: cardToUpdate.photo,
        updateCardId: updateCardId
      });
      this.handleTitle(cardToUpdate.title);
      this.handleText(cardToUpdate.text);
      this.handlePhone(cardToUpdate.phone);
    }
  }

  //ADD CARD TO LOCAL STORAGE
  addOrUpdateCard = () => {
    // event.preventDefault();
    const card = {
      title: this.state.title,
      text: this.state.text,
      phone: this.state.phone,
      photo: this.state.photo,
      id: this.state.updateCardId
    };
    if(this.state.updateCardId !== undefined) {
      update(card);
    } else {
      add(card);
    }
    this.setState(initialState);
  };

  handleTitle(title) {
    const validation = validateTitle(title);
    this.setState({ 
      title: title,
      titleValidationText: validation.text,
      titleIsValid: validation.isValid
    });
  }

  handleText(text) {
    const validation = validateText(text);
    this.setState({ 
      text: text,
      textValidationText: validation.text,
      textIsValid: validation.isValid
    });
  }

  handlePhone(phone) {
    const validation = validatePhone(phone);
    this.setState({ 
      phone: phone,
      phoneValidationText: validation.text,
      phoneIsValid: validation.isValid
    });
  }

  imageUpload = (e) => {
    const file = e.target.files[0];
    getBase64(file).then(base64 => {
      this.setState({photo: base64});
    });
};

  render() {
    let formValid = false;
    if (this.state.titleIsValid === true && this.state.phoneIsValid === true) {
      formValid = true;
    }
    let imageUploaded = "photoLabel ui blue button";
    if (this.state.photo !== undefined) {
      imageUploaded = "photoLabel ui basic blue button";
    }
   
    return (
      <form className="ui form grid" onSubmit={this.addOrUpdateCard}>
        <h2 className="header sixteen wide column">Подать объявление</h2>
        <div className="row">
          <div className="required field ten wide column">
            <label>Заголовок</label>
              <textarea
                type="text"
                rows="1"
                maxLength="140"
                name="title"
                value={this.state.title}
                onChange={(e) => this.handleTitle(e.target.value)}
              />
          </div>
          <CardValidation text = {this.state.titleValidationText} isValid = {this.state.titleIsValid} />
        </div>
        <div className="row">
          <div className="field ten wide column">
            <label>Текст объявления</label>
              <textarea
                type="text"
                maxLength="300"
                name="text"
                value={this.state.text}
                onChange={(e) => this.handleText(e.target.value)}
              />
          </div>
          <CardValidation text = {this.state.textValidationText} isValid = {this.state.textIsValid} />
        </div>
        <div className="row">
          <div className="required field ten wide column">
            <label>Телефон</label>
              <input
                type="tel"
                name="phone"
                placeholder="+7 (___) ___-__-__"
                rows="1"
                value={this.state.phone}
                onChange={(e) => this.handlePhone(e.target.value)}
              />
          </div>
          <CardValidation text = {this.state.phoneValidationText} isValid = {this.state.phoneIsValid} />
        </div>
        <div className="field">
          <div className="field seven wide column">
            <label htmlFor='upload-photo' className={imageUploaded}>Прикрепить фото</label>
            <input
              type="file"
              name="photo"
              id="upload-photo"
              style={{display:'none'}}
              onChange={this.imageUpload}
            />
            <img className="uploaded-image ui image small" src={this.state.photo} />
          </div>
          <div className="field four wide column">
            <button className="ui blue button" value="submit" disabled={!formValid}>
              Подать
            </button>
          </div>
        </div>
      </form>
    );
  }
}



export default CreateCard;
