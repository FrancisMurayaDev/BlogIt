import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "secondary" }}>
          BlogIt
        </Typography>
        <Box>
          <Button component={Link} to="/login" color="primary" variant="outlined" sx={{ mr: 1 }} size="small">
            Login
          </Button>
          <Button component={Link} to="/signup" color="primary" variant="contained" size="small">
            Sign Up
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
