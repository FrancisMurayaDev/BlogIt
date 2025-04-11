import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  Box,
  Button,
} from "@mui/material";

function BlogCard({ blog }) {
  return (
    <Card sx={{ maxWidth: 600, margin: "auto", mb: 4 }}>
      <CardMedia
        component="img"
        height="200"
        image={blog.image}
        alt={blog.title}
      />
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {blog.excerpt}
        </Typography>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box display="flex" alignItems="center">
            <Avatar src={blog.authorAvatar} sx={{ mr: 1 }} />
            <Typography variant="body2">{blog.author}</Typography>
          </Box>
          <Typography variant="caption">{blog.updatedAt}</Typography>
        </Box>
        <Button href={`/blog/${blog.id}`} sx={{ mt: 2 }}>
          Read More
        </Button>
      </CardContent>
    </Card>
  );
}

export default BlogCard;
