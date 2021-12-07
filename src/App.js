import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacts from "./components/Contacts";
import About from "./components/About";
import Weather from "./components/Weathers";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route exact path="/" element={<Weather />}></Route>
          <Route path="/contact" element={<Contacts />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
