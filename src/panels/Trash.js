import React from 'react';
import {} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';


import './Trash.css';

class Trash extends React.Component {
	constructor(props) {
      super(props);
	}
  render() {
  	return(
       <div className={this.props.type} id="size">
       </div>
    );
  }

}

export default Trash;