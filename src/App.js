import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import Swipe from 'react-easy-swipe';
import View from '@vkontakte/vkui/dist/components/View/View';
import {Div} from '@vkontakte/vkui';
import Trash from './panels/Trash';
import Card from './panels/Card';
var axios = require('axios');

const points = {
  textAlign: "center",
  marginTop: "20%",
  fontFamily: "Arial",
  fontWeight: "bold",
  fontSize: "2em"
}

const wrap = {
   display: "flex",
   flexDirection: "column",
   justifyContent: "center"
}

class App extends React.Component{
constructor(props){
  super(props);
    this.state = {
       currentCard:{
         name:"Банан",
         kg:0.001,
         description:"Просто банан",
         img:null

       }
    }
}
   componentDidMont(){
    console.log(7);
   }

   onUp = (e) =>{
     console.log("UP");
   }
   onDown = (e) =>{
     console.log("вниз");
   }
   onLeft = (e) =>{
     console.log("ktdj");
   }
   onRight = (e) =>{
     console.log("44");
   }
  render(){
	return (
  <div>
  <div class="points" style={points}>0 кг</div>


        <div class="container">

      	<div class="column">
      	  <Trash type="size plastic"></Trash>
      	</div>


      <div class="row">
      	<Trash type="size organic"></Trash>
        <Trash type="size paper"></Trash>
      </div>

      <div class="column">
      	<Trash type="size glass"></Trash>


      </div>
	     <Swipe onSwipeUp={this.onUp}
              onSwipeDown={this.onDown}
              onSwipeLeft={this.onLeft}
              onSwipeRight={this.onRight}>
        <Card></Card>
       </Swipe>

  </div>



</div>



    )
   }
}

export default App;
