import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Nav } from './Pages/nav';
import {Profile} from './Pages/Profile'




function App() {
  return (
    <div className="App">

      <Router>

        <div>Ali Website</div>

        <Nav />
       

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile/:name/:id" element={<Profile />} />
          <Route path="/*" element={<div><h1>Not Found</h1></div>} />

          
        </Routes>

        <div>
          This is Footer
        </div>



      </Router>
      




    </div>
  );
}


export default App;
