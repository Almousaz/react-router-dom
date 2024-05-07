import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route , Link} from "react-router-dom"
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Contact } from './Pages/Contact';
import { Nav } from './Pages/nav';
import {Profile} from './Pages/Profile'
import { useState , createContext } from 'react';
import {QueryClient , QueryClientProvider} from 'react-query'



export const ProfileContext = createContext();

//  https://catfact.ninja/fact



function App() {

  const client = new QueryClient({defaultOptions :{
    queries : {refetchOnWindowFocus : false},
    mutations : {}
  }}) 

  const [userName , setUserName] = useState("ali webs")



  return (
    <div className="App">

      <QueryClientProvider client={client}>

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

      </QueryClientProvider>
      




    </div>
  );
}


export default App;
