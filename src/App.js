import "./App.css";
import { Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="*" element={<Login />} /> */}
        <Route path="details/:movieId" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
