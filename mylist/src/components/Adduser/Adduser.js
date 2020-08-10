import React , {Component} from 'react';
import './Adduser.css';
class Adduser extends Component {
    state = {
        username:'',
        password:''
    }
    handelchange = (e) => {
     this.setState({
         [e.target.id] : e.target.value 
     })
    }
    handelsubmit = (e)=> {
        e.preventDefault(); 
        this.props.addItem(this.state)
        console.log(this.state);
        this.setState({username:'',
        password:''})
    }
render (){
    return(
        <div> 
         <form onSubmit={this.handelsubmit}>
             <input type="text" placeholder="enter your name .." id="username" onChange={this.handelchange} value={this.state.username}></input>
             <input type="number" placeholder="enter your password .." id="password" onChange={this.handelchange} value={this.state.password}></input>
             <input type="submit" value="Add"></input>
         </form>
        </div>
    )
 }

}
 export default Adduser;