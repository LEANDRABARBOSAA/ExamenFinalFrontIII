
import{BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";
import DentistContainer from "./Components/Pages/Dentist/DentistContainer";
import DentistDetailContainer from "./Components/Pages/DentistDetail/DentistDetailContainer";
import DentistContactContainer from "./Components/Pages/DentistContact/DentistContactContainer";
import FavsContainer from "./Components/Pages/Favs/FavsContainer";
import Home from "./Components/Pages/Home/Home";

import './App.css'
import GlobalContextProvider from "./context/GlobalContext";

function App() {
  

  return (

    <BrowserRouter>
    <GlobalContextProvider>
      
        <Routes>
          <Route element={<Navbar />}>
            <Route element={<Footer />}>
              <Route path="/" element={<Home/>} />
              <Route path="/dentists" element={<DentistContainer/>} />
              <Route path="/dentist/:id" element={<DentistDetailContainer/>} />
              <Route path="/contact" element={<DentistContactContainer/>}  />
              <Route path="/favs" element={<FavsContainer/>} />
              <Route path="*" element={<h1>Not found</h1>} />
            </Route>
          </Route>
        </Routes>
      
    </GlobalContextProvider >
    </BrowserRouter>
    
  )
}

export default App
