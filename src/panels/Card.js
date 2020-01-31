import React from 'react';
import {} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import banana from '../img/banana.png';
import './Card.css';

class Card extends React.Component {
     constructor(props) {
     	super(props);
     }

     render() {
     	return(
       <div className="card">
          <div class="front">
          <img src={banana} alt="banana" id="img" />
          </div>

         <div class="back">
            это бана
         </div>

       </div>
       );
     }
}


export default Card;
