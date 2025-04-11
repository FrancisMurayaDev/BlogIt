import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Typography,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import img from "../../../public/blog-img.jpg"

const myBlogs = [
  {
    id: 1,
    title: "My Journey into Blogging",
    excerpt: "It all started with a simple blog post...",
    image: "../../../public/blog-img.jpg",
    updatedAt: "Apr 9, 2025",
  },
  {
    id: 2,
    title: "React vs Vue",
    excerpt: "Here are my thoughts after trying both...",
    image: "../../../public/blog-img.jpg",
    updatedAt: "Apr 6, 2025",
  },
];
function MyBlogsPage() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 4 }}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h4">My Blogs</Typography>
          <Button component={Link} to="/write" variant="contained">
            + New Blog
          </Button>
        </Box>

        <Grid container spacing={3}>
          {myBlogs.map((blog) => (
            <Grid item xs={12} md={6} key={blog.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="180"
                  image={blog.image}
                  alt={blog.title}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {blog.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {blog.excerpt}
                  </Typography>
                  <Typography variant="caption" display="block" sx={{ mt: 1 }}>
                    Updated on {blog.updatedAt}
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
                      onClick={() => alert("I will impliment the delete function later")}
                    >
                      Delete
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}


export default MyBlogsPage;