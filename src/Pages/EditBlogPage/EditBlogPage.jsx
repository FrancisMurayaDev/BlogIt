import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

const mockBlog = {
  id: 1,
  title: "My Journey into Blogging",
  excerpt: "It all started with a simple blog post...",
  body: "Here’s the full story behind it all...",
  image: "../../../public/blog-img.jpg",
};

 function EditBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    body: "",
    image: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setBlogData({
      title: mockBlog.title,
      excerpt: mockBlog.excerpt,
      body: mockBlog.body,
      image: mockBlog.image,
    });
  }, [id]);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Blog updated:", blogData);
      setLoading(false);
      navigate("/myblogs");
    }, 1500);
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Edit Blog
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="Featured Image URL"
            name="image"
            required
            margin="normal"
            value={blogData.image}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Title"
            name="title"
            required
            margin="normal"
            value={blogData.title}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Excerpt"
            name="excerpt"
            required
            multiline
            rows={3}
            margin="normal"
            value={blogData.excerpt}
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Body"
            name="body"
            required
            multiline
            rows={8}
            margin="normal"
            value={blogData.body}
            onChange={handleChange}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            disabled={loading}
            fullWidth
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : "Update Blog"}
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default EditBlogPage;
