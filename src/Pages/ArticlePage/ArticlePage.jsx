// src/pages/ArticlePage.jsx
import { useParams } from "react-router-dom";
import {
  Box,
  Container,
  Typography,
  Avatar,
  Divider,
  Grid,
} from "@mui/material";
import NavBar from "../../Components/NavBar/NavBar";

const mockArticle = {
  id: 1,
  title: "My First Blog Post",
  body: "This is the full content of the blog post. It's just sample text for now...",
  image: "https://source.unsplash.com/random/800x400?blog",
  excerpt: "Quick look into my writing journey...",
  author: "FrancisDev",
  authorAvatar: "",
  updatedAt: "Apr 10, 2025",
};

const moreArticles = [
  {
    id: 2,
    title: "Second Post",
    excerpt: "A follow-up on my blogging adventures.",
    image: "https://source.unsplash.com/random/800x401?writing",
  },
  {
    id: 3,
    title: "Learning Full Stack",
    excerpt: "Sharing lessons from building apps.",
    image: "https://source.unsplash.com/random/800x402?tech",
  },
];

export default function ArticlePage() {
  const { id } = useParams();

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          {mockArticle.title}
        </Typography>

        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={mockArticle.authorAvatar} sx={{ mr: 1 }} />
          <Typography variant="body2">{mockArticle.author}</Typography>
          <Typography variant="caption" sx={{ ml: 2 }}>
            Last updated: {mockArticle.updatedAt}
          </Typography>
        </Box>

        <img
          src={mockArticle.image}
          alt="Featured"
          style={{ width: "100%", borderRadius: 8, marginBottom: 24 }}
        />

        <Typography variant="body1" sx={{ mb: 4 }}>
          {mockArticle.body}
        </Typography>

        <Divider sx={{ my: 4 }} />

        <Typography variant="h5" gutterBottom>
          More articles from {mockArticle.author}
        </Typography>

        <Grid container spacing={2}>
          {moreArticles.map((article) => (
            <Grid xs={12} sm={6} key={article.id}>
              <Box border={1} borderColor="grey.300" borderRadius={2} p={2}>
                <img
                  src={article.image}
                  alt={article.title}
                  style={{ width: "100%", borderRadius: 8 }}
                />
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {article.title}
                </Typography>
                <Typography variant="body2">{article.excerpt}</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}