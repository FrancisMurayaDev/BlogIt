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

export default function WritePage() {
  const [blogData, setBlogData] = useState({
    title: "",
    excerpt: "",
    body: "",
    imageFile: null,
  });
  const [imagePreview, setImagePreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setBlogData({ ...blogData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBlogData({ ...blogData, imageFile: file });
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Blog submitted:", blogData);
      setLoading(false);
    }, 1500);
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
