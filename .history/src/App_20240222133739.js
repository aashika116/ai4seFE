import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'





function App() {
  return (
     <div className="App">
      <Router>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/homepage' element={<Homepage/>}/>


        </Routes>
        
      </Router>
     
     </div>

   );

    
}

export default App;
