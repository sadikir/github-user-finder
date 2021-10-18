import './Repo.css'
const Repo=({repoData})=>{
  console.log(repoData)
  return (
    <div className="repo">
    <h4>{repoData.name}</h4>
    <p>{repoData.description===null
    ?"No Description"
    :repoData.description}</p>
    </div>
  )
}
export default Repo;