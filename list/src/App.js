import React, { Component } from 'react';
//import './App.css';
import Items from './Component/Items';

class App extends Component{
  state ={
    items:[
      {id:1,name:'amir',age:22,count:1 },
      {id:2,name:'ahmed',age:23,count:4},
      {id:3,name:'amgad',age:25,count:5},
      {id:4,name:'peter',age:29,count:3},
      {id:5,name:'besho',age:27,count:2},
      {id:6,name:'abdo',age:26,count:6},
    ]
  }
   handelClick=(e)=>{
     let oba=Math.random()*10;
     let items = this.state.items;
     items.push({id:oba,name:'khaled',age:30,count:1})
     this.setState({
       items:items
     })
   }
    handelDelete=(e)=>{
     this.setState({
      items:[ {id:4 ,name:"bor" ,age:40,   count:4}]
    })
   }

  render()
  {
  return (
    <div className="App">
      <Items items={this.state.items}/>
     <button onClick={this.handelClick}>Add </button>
     <button onClick={this.handelDelete}>Delete </button>
  
    </div>
  );
}
}
export default App;
