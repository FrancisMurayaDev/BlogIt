import { Container, Typography, CircularProgress } from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import BlogCard from "../../Components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

export default function BlogListingPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/blogs`);
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError("Failed to load blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Latest Blogs
        </Typography>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : blogs.length === 0 ? (
          <Typography align="center">No blogs available yet.</Typography>
        ) : (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        )}
      </Container>
    </>
  );
}
