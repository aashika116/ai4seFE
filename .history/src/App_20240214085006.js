import './App.css';
import {
  createBrowserRouter,
  RouterProvider,Router
} from "react-router-dom";
import Login from './pages/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);



function App() {
  return (
    <Router>

    </Router>
    <div className="App">
      <Login/>
     
    </div>
  );
}

export default App;
