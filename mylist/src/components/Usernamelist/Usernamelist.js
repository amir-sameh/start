import React  from 'react';
import './Usernamelist.css'
 const Userlist = (props) => {
    const {users , deleterusers} = props;
    let lenght =users.length;
     console.log(lenght);
    const usernames = lenght ? (users.map(item=>{
        return(
            <div key={item.id}>
                <span>{item.username}</span>
                <span>{item.password}</span>
                <span onClick={()=>deleterusers(item.id)}>&times;</span>   
            </div>
        )
    })): (<p>you have deleted all data plz Stop :'( </p>)
    return (
     <div>
         <div className="listhead"> 
             <span>name </span>
             <span>password</span>
             <span>action</span>
         </div>
         {usernames}
     </div>
 )

 }
  
 export default Userlist;