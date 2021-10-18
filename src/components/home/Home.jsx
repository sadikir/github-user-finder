import './Home.css'
import axios from 'axios';
import { useState } from 'react'
import User from "../../components/user/User.jsx"
const Home =()=>{
  const [username, setUsername] = useState("")
  const [users, setUsers] = useState("");
  const handleClick=(e)=>{
    if(e.target.previousSibling.value===""){
      alert("please input username");
    }else{
      axios.get("https://api.github.com/search/users?q=" + username + "+in:user")
      .then((data)=>{
        setUsers(data.data.items)
      });
    }
  }
  
  return(
    <div>
       <p className="instruction">Instruction: Search github users by username</p>
      <div className ="inputWrapper">
       <input value ={username} onChange={(e)=>setUsername(e.target.value)} type= "text" placeholder="Search Users" />
       <button onClick={handleClick}>Search</button>
      </div>
      <div className="usersWrapper">
      {typeof users==="object"
      ?users.map((u)=><User key={u.id} person={u}/>)
      :null}
      </div>
    </div>
  )
}
export default Home;