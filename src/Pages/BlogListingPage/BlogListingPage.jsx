import { Container, Typography } from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";
import BlogCard from "../../Components/BlogCard/BlogCard";
// import img from "../../../public/hero-bg.jpg"

const mockBlogs = [
  {
    id: 1,
    title: "My First Blog Post",
    excerpt: "This is a quick look into my writing journey...",
    image: "../../../public/hero-bg.jpg",
    author: "FrancisDev",
    authorAvatar: "",
    updatedAt: "Apr 10, 2025",
  },
  {
    id: 2,
    title: "Lessons from Full Stack Development",
    excerpt: "What I’ve learned building modern web apps...",
    image: "../../../public/hero-bg.jpg",
    author: "FrancisDev",
    authorAvatar: "",
    updatedAt: "Apr 8, 2025",
  },
];

export default function BlogListingPage() {
  return (
    <>
      <NavBar />
      <Container sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Latest Blogs
        </Typography>
        {mockBlogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </Container>
    </>
  );
}
