import React from 'react';
import { remove } from "../util/storage";


class CardDetails extends React.Component {
  render(props) {
    const {title, text, phone, photo, id} = this.props.card;
  
  return (
    <div className='ui sixteen wide column'>
    <p>{title}</p>
    <p>{text}</p>
      <div className='field'>
        <p>{phone}</p> 
      </div>
      {/* <div className='field'>
        <img alt={title} value={photo} />
      </div> */}
      <div className='field'>
        <input className='ui blue basic button' type='submit' value='Редактировать' />
      </div>
      <div className='field'>
        <input className='ui red basic button' type='submit' value='Удалить' onClick={(e) => remove(id)} />
      </div>
    </div>
  );
  }
}

export default CardDetails;