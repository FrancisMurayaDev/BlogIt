import {
  Box,
  Container,
  Typography,
  CircularProgress,
  Avatar,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

export default function BlogDetailsPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${apiUrl}/blogs/${id}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Failed to fetch blog:", err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <>
        <NavBar />
        <Container sx={{ mt: 5, textAlign: "center" }}>
          <CircularProgress />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <NavBar />
        <Container sx={{ mt: 5 }}>
          <Typography color="error" align="center">
            {error}
          </Typography>
        </Container>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h3" gutterBottom>
          {blog.title}
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Avatar sx={{ mr: 1 }}>
            {blog.author?.username?.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="body2" color="text.secondary">
            By <strong>{blog.author?.username}</strong> ·{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </Typography>
        </Box>

        {blog.image && (
          <Box
            component="img"
            src={blog.image}
            alt={blog.title}
            sx={{
              width: "100%",
              maxHeight: 400,
              borderRadius: 2,
              objectFit: "cover",
              mb: 3,
            }}
          />
        )}

        <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
          {blog.body}
        </Typography>
      </Container>
    </>
  );
}
