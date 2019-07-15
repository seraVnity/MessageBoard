import React from "react";
import { remove } from "../util/storage";
import "./CardDetails.css";

class CardDetails extends React.Component {
  
  handleUpdate = (e) => {
    this.props.onCardUpdate(this.props.card.id);
  };
  
  render(props) {
    const { title, text, phone, id, photo } = this.props.card;
    return (
      <div className="row" style={{ margin: "1em 0" }}>
        <div className="field ten wide column">
          <div>{title}</div>
          <div className="card subheader">{text}</div>
          <div className="field ui image medium">
            <img alt="title" src={photo} />
          </div>
        </div>
        <div className="field six wide column">
          <p>
            <i className="phone icon" />
            {phone}
          </p>
          <input
            className="ui blue basic button"
            type="button"
            value="Редактировать"
            onClick={this.handleUpdate}
          />
          <input
            className="ui red basic button"
            type="submit"
            value="Удалить"
            onClick={e => remove(id)}
          />
        </div>
      </div>
    );
  }
}

export default CardDetails;
