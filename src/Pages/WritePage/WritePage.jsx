import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import NavBar from "../../Components/NavBar/NavBar";
import apiUrl from "../../utils/apiUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function WritePage() {
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    body: "",
  });
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();
      formData.append("title", blogData.title);
      formData.append("excerpt", blogData.excerpt);
      formData.append("body", blogData.body);
      if (imageFile) {
        formData.append("image", imageFile);
      }

      const res = await axios.post(`${apiUrl}/blogs`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Blog posted:", res.data);
      navigate("/myblogs");
    } catch (err) {
      console.error("Blog post failed:", err.response?.data);
      setError(err.response?.data?.message || "Failed to post blog");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Write a New Blog
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Button variant="outlined" component="label">
            Upload Featured Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Button>

          {imagePreview && (
            <Box sx={{ mt: 2 }}>
              <img
                src={imagePreview}
                alt="Preview"
                style={{ maxWidth: "100%", borderRadius: 8 }}
              />
            </Box>
          )}

          <TextField
            fullWidth
            label="Title"
            name="title"
            required
            margin="normal"
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
            onChange={handleChange}
          />

          {error && (
            <Typography color="error" sx={{ mt: 2 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ mt: 3 }}
            disabled={loading}
            fullWidth
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Publish"
            )}
          </Button>
        </Box>
      </Container>
    </>
  );
}
