import NavBar from "../../Components/NavBar/NavBar";
import { Box, Typography, Button, Container, Stack } from "@mui/material";


function LandingPage() {
  return (
    <>
    <NavBar />
    <Box>
      
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 10 }}>
        <Typography variant="h3" fontWeight="bold" gutterBottom>
          Share your story with the Worldd
        </Typography>
        <Typography variant="h6" color="text.secondary" gutterBottom>
          A platform for writers to publish, manage and share their experiences and thoughts.
        </Typography>
        <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
          <Button variant="contained" color="primary" size="large" href="/signup">
            Start Writing
          </Button>
          <Button variant="outlined" color="primary" size="large" href="/signup">
            Explore Stories
          </Button>
        </Stack>
      </Container>
    </Box>
      
    </>
  )
}

export default LandingPage
