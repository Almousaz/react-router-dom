import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Nav } from './Pages/nav';
import {Profile} from './Pages/Profile'
import { useState , createContext } from 'react';


export const ProfileContext = createContext();





function App() {

  const [userName , setUserName] = useState("ali webs")



  return (
    <div className="App">

      <ProfileContext.Provider value={{userName ,setUserName}} >

      <Router>

        <div>Ali Website</div>

        <Nav />
       

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile  />} />
          <Route path="/*" element={<div><h1>Not Found</h1></div>} />

          
        </Routes>

        <div>
          This is Footer
        </div>



      </Router>

      </ProfileContext.Provider>
      




    </div>
  );
}


export default App;
