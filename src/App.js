import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
import './App.css';
import List from './pages/list/list';
import Hotel from './pages/hotel/hotel';
 
function App() {

 
  return (
    <div>
      <BrowserRouter>
          <Routes>
                <Route path='/' element = { <Home/>} />
                <Route path='list' element = { <List/>} />                
                <Route path='hotel' element = { <Hotel/>} />



          </Routes>
      
      </BrowserRouter>
       
       
       
    </div>
  )
}

export default App;
