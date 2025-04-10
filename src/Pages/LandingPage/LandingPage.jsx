import NavBar from "../../Components/NavBar/NavBar";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import heroImage from "../../../public/hero-bg.jpg";


function LandingPage() {
  return (
    <>
    <NavBar />
    <Box
      sx={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        py: { xs: 10, md: 15 },
        px: 2,
        color: "#fff",
        position: "relative",
        zIndex: 1,
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(33, 28, 46, 0.6)",
          zIndex: -1,
        },
      }}
    >
      <Container maxWidth="md" sx={{ textAlign: "center" }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Share your story with the World
        </Typography>
        <Typography variant="h6" color="inherit" gutterBottom>
          A platform for writers to publish, manage and share their experiences and thoughts.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" size="large" href="/signup">
            Start Writing
          </Button>
          <Button variant="outlined" color="inherit" size="large" href="/signup">
            Explore Stories
          </Button>
        </Stack>
      </Container>
    </Box>
      
    </>
  )
}

export default LandingPage
