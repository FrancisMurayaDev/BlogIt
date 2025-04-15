import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

function MyBlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMyBlogs = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(`${apiUrl}/api/blogs/mine`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBlogs(res.data);
      } catch (err) {
        console.error("Failed to fetch my blogs:", err);
        setError("Failed to load your blogs.");
      } finally {
        setLoading(false);
      }
    };

    fetchMyBlogs();
  }, []);

  return (
    <>
      <NavBar />
      <Container sx={{ mt: 4 }}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={3}
        >
          <Typography variant="h4">My Blogs</Typography>
          <Button component={Link} to="/write" variant="contained">
            + New Blog
          </Button>
        </Box>

        {loading ? (
          <CircularProgress />
        ) : error ? (
          <Typography color="error">{error}</Typography>
        ) : blogs.length === 0 ? (
          <Typography>No blogs yet. Start writing!</Typography>
        ) : (
          <Grid container spacing={3}>
            {blogs.map((blog) => (
              <Grid item xs={12} md={6} key={blog.id}>
                <Card>
                  <CardMedia
                    component="img"
                    height="180"
                    image={blog.image || "/default.jpg"}
                    alt={blog.title}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {blog.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {blog.excerpt}
                    </Typography>
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1 }}
                    >
                      Created on {new Date(blog.createdAt).toLocaleDateString()}
                    </Typography>

                    <Box mt={2} display="flex" justifyContent="space-between">
                      <Button
                        component={Link}
                        to={`/edit/${blog.id}`}
                        variant="outlined"
                        size="small"
                      >
                        Edit
                      </Button>
                      <Button
                        color="error"
                        variant="outlined"
                        size="small"
                        onClick={() => alert("Delete feature coming soon")}
                      >
                        Delete
                      </Button>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </>
  );
}

export default MyBlogsPage;
