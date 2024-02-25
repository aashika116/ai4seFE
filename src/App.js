import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Homepage from './pages/Homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Redirect from empty path to the Login page */}
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/homepage' element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
