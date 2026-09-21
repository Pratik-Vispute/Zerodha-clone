import { Route, Routes } from "react-router-dom";
import Signup from "./landing_page/signup/Signup";
import Login from "./landing_page/login/Login";
import HomePage from "./landing_page/home/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
