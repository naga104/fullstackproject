import "./App.css"
import Navabar from './Componets/Navabar/Navabar';
import Home from './pages/Home/Home';
import Reg from './pages/Reg/Reg';
import { BrowserRouter as Router ,Routes,Route, Navigate } from 'react-router-dom';
import Login from "./pages/Login/Login";
import AddLocation from "./pages/Addnewlocation/AddLocation";
import Addsuccessfully from "./pages/Addsucesfully/Addsuccessfully";
import Location from "./pages/Location/Location";
import Viewlocation from "./pages/Viewlocation/Viewlocation";
import Card from "./pages/Cards/Card";
import { useAuthContext } from "./Hooks/useAuthContext";


function App() {
  const {user} =useAuthContext()
  return (
    <>
      <Router>
      <Navabar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Login" element={!user?<Login/>:<Navigate to="/location"/>}/>
          <Route path="/Reg" element={!user?<Reg/>:<Navigate to="/location"/>}/>
          <Route path="/location" element={<Location/>}/>
          <Route path="/Addlocation" element={user?<AddLocation/>:<Navigate to ="/Reg"/>}/>
          <Route path="/Addsuccessfully" element={user?<Addsuccessfully/>:<Navigate to ="/location"/>}/>
          <Route path ="/viewlocation" element = {user?<Viewlocation/>:<Navigate to ="/login"/>}/>
          <Route path ="/card:id" element = {<Card />}/>
        </Routes>
        {/* <Card/> */}
      </Router>
    </>
  );
}

export default App;
