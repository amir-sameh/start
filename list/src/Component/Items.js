import React , {Component} from 'react';
import './Items.css';
class Items extends Component {
    render(){
        // const id = this.props.id ;
        // const name = this.props.name ;
        // const age = this.props.age ;
        // const {id , name , age }= this.props;
        const {items} = this.props;
        const alldata = items.map( item => {
              return item.count >0 ? (
                  //we can use /*{Math.random()*10}/*/ if we dont have a key like id in our case 
                   <div className="item" key ={item.id}> 
                       <div>{item.id}</div>
                       <div>{item.name}</div>
                       <div>{item.age}</div>
                   </div>
               ):null
        } )
        return(
            <div>
               hamadaaaa 3mohom
            {alldata}
            </div>
        )
    }
}
export default Items ;