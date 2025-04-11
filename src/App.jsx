// import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LogingPage from "./Pages/LogingPage/LogingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />}/>
        <Route path="/login" element = {<LogingPage/>}/>
      </Routes>
    </>
  );
}

export default App;
