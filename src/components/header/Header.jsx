import { Link } from 'react-router-dom'
import './Header.css'
const Header =()=>{
  return(
    <div className="header">
       <h1>Github User Finder</h1>
       <Link className="home-link" to="/"><h4>Home</h4></Link>
    </div>
  )
}
export default Header;