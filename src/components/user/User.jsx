 import "./User.css"
 import { Link } from "react-router-dom"
const User=({ person })=>{
return(
  <div className="userWrapper">
   <img className="userImg" src={person.avatar_url} alt="" />
   <div>
     <h4 className="userName">{person.login}</h4>
     <Link className="userLink" to={"/info/"+person.login }>
       <h4 className="moreInfo">More..</h4>
     </Link>
   </div>
  </div>
)
}
export default User;