import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: "none", color: "secondary" }}
        >
          BlogIt
        </Typography>
        <Box>
          {isLoggedIn ? (
            <>
              <Button
                component={Link}
                to="/myblogs"
                color="primary"
                variant="text"
                size="small"
                sx={{ mr: 1 }}
              >
                My Blogs
              </Button>
              <Button
                component={Link}
                to="/write"
                color="primary"
                variant="text"
                size="small"
                sx={{ mr: 1 }}
              >
                Write
              </Button>
              <Button
                component={Link}
                to="/profile"
                color="primary"
                variant="text"
                size="small"
                sx={{ mr: 1 }}
              >
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                color="error"
                variant="outlined"
                size="small"
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                component={Link}
                to="/login"
                color="primary"
                variant="outlined"
                sx={{ mr: 1 }}
                size="small"
              >
                Login
              </Button>
              <Button
                component={Link}
                to="/signup"
                color="primary"
                variant="contained"
                size="small"
              >
                Sign Up
              </Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
