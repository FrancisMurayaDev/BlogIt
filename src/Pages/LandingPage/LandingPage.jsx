import NavBar from "../../Components/NavBar/NavBar";
import { Box, Typography, Button, Container, Stack } from "@mui/material";
import heroImage from "../../../public/hero-bg.jpg";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <Box
        sx={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          py: { xs: 10, md: 18 },
          px: 2,
          color: "#fff",
          position: "relative",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            bgcolor: "rgba(25, 25, 112, 0.6)",
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{ lineHeight: 1.2 }}
          >
            Share Your Voice with the World
          </Typography>

          <Typography
            variant="h6"
            color="inherit"
            sx={{ mt: 2, fontWeight: 400 }}
          >
            Publish your stories. Inspire others. Make your mark.
          </Typography>

          <Stack direction={{ xs: "column", sm: "row" }} spacing={2} justifyContent="center" mt={5}>
            <Button
              variant="contained"
              size="large"
              href="/signup"
              sx={{
                fontWeight: 600,
                px: 4,
              }}
            >
              Start Writing
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="/blogs"
              sx={{
                fontWeight: 700,
                px: 4,
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Explore Stories
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
