// import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LogingPage from "./Pages/LogingPage/LogingPage";
import BlogListingPage from "./Pages/BlogListingPage/BlogListingPage";
import WritePage from "./Pages/WritePage/WritePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LogingPage />} />
        <Route path="/blogs" element={<BlogListingPage/>} />
        <Route path="/write" element={<WritePage />}/>
      </Routes>
    </>
  );
}

export default App;
