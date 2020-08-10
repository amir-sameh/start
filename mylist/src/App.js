import React ,  {Component} from 'react';
import Userlist from './components/Usernamelist/Usernamelist';
import Adduser from './components/Adduser/Adduser';
class App extends Component {
  state = {
    users : [
    {id:1, username:'amir' ,password:123},
    {id:2, username:'ahmed' ,password:456},
    {id:3, username:'besho' ,password:789}
    ]
  }
 
  deleteuser = (id) => {
    
  let x = this.state.users;
  let f = x.findIndex(x => x.id===id)
  x.splice(f,1)
  this.setState({x})
  
  }
  addItem = (item)=>{
    item.id =Math.random(); 
 let users = this.state.users;
 users.push(item);
 this.setState({users})
  }
  render(){  
    return (
      <div className="App container">
       <h1 className="text-center"> Add & delete whatever you want  </h1>
      <Userlist users={this.state.users}  deleterusers={this.deleteuser} />
      <Adduser addItem={this.addItem} />
      </div>
    );
  }
}

export default App;
