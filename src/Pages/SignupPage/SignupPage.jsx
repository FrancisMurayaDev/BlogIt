import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Link as MuiLink,
  CircularProgress,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      setLoading(false);
      console.log("User signed up:", formData);

    }, 1500);
  }

  return (
    <>
      <NavBar />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Join a community of readers and writers
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField fullWidth label="First Name" name="firstName" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Last Name" name="lastName" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Email" name="email" type="email" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Username" name="username" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Password" name="password" type="password" margin="normal" required onChange={handleChange} />
          <TextField fullWidth label="Confirm Password" name="confirmPassword" type="password" margin="normal" required onChange={handleChange} />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 2 }} disabled={loading}>
            {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
          </Button>

          <Typography align="center" sx={{ mt: 2 }}>
            Already have an account?{" "}
            <MuiLink component={Link} to="/login">
              Login
            </MuiLink>
          </Typography>
        </Box>
      </Container>
    </>
  );
}

export default SignupPage
