import { useParams } from "react-router-dom";
 import axios from 'axios';
import { useState, useEffect } from 'react'
import "./Info.css"
import Repo from '../../components/repo/Repo.jsx'
const Info=()=>{
  const { username } =useParams()
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState('')
 
useEffect(()=>{
  axios.get("https://api.github.com/users/"+username)
 .then((data)=>{
   setUser(data.data)
 })
 
 axios.get("https://api.github.com/users/"+username+"/repos")
 .then((data)=>{
   setRepos(data.data)
   
 })
},[username])
  return(
     <div>
      <div className="imgInfoWrapper">
        <img className = "imgInfo" src={user.avatar_url} alt="user.login"/>
        <div className="infoWrapper">
          <h4>Name: <span className="h4Big">{user.login}</span></h4>
          <p>Followers:<span className="bigInfo"> {user.followers}</span></p>
          <p>Followings: <span className="bigInfo">{user.following}</span></p>
          <p>Gists: <span className="bigInfo">{user.public_gists}</span></p>
          <p>Repos: <span className="bigInfo"> {user.public_repos}</span></p>
          <p>Blog: <span className="bigInfo">{user.blog}</span></p>
          <a  target="_blank" rel ="noreferrer" href={user.html_url}><span className="bigInfo">{user.html_url}</span></a>
        </div>
     </div>
     <div className="repoWrapper">
      <h1>Repositories</h1>
       {typeof repos ==="object"
       ?repos.map((repo)=><Repo key={repo.id} repoData={repo}/>)
       :null}
     </div>
    </div>
  )
}
export default Info;