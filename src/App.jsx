import {BrowserRouter, Route} from "react-router-dom"
import Header from './components/header/Header'
import Home from './components/home/Home'
import Info from "./components/info/Info.jsx"
import "./App.css"
const App=()=>{
 
  return (
    
    <BrowserRouter>
       <div className="wrapper">
        <Header />
        
       
       <Route path ="/" exact component={Home}/>
       <Route path ="/info/:username" exact component={Info}/>
       </div>
    </BrowserRouter>
   
  )
}
export default App;