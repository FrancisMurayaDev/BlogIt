// import NavBar from "./Components/NavBar/NavBar";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { Route, Routes } from "react-router-dom";
import SignupPage from "./Pages/SignupPage/SignupPage";
import LogingPage from "./Pages/LogingPage/LogingPage";
import BlogListingPage from "./Pages/BlogListingPage/BlogListingPage";
import WritePage from "./Pages/WritePage/WritePage";
import ArticlePage from "./Pages/ArticlePage/ArticlePage";
import MyBlogsPage from "./Pages/MyBlogsPage/MyBlogsPage";
import EditBlogPage from "./Pages/EditBlogPage/EditBlogPage";
import MyProfilePage from "./Pages/MyProfilePage/MyProfilePage";
import BlogDetailsPage from "./Pages/BlogsDetailsPage/BlogsDetailsPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LogingPage />} />
        <Route path="/blogs" element={<BlogListingPage />} />
        <Route path="/write" element={<WritePage />} />
        {/* <Route path="/article" element={<ArticlePage />} /> */}
        <Route path="/blog/:id" element={<ArticlePage />} />
        <Route path="/myblogs" element={<MyBlogsPage />} />
        <Route path="/edit/:id" element={<EditBlogPage />} />
        <Route path="/profile" element={<MyProfilePage />} />
        <Route path="/blogs/:id" element={<BlogDetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
