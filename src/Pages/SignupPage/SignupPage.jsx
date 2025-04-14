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
import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar/NavBar";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import apiUrl from "../../utils/apiUrl";

function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { isPending, mutate } = useMutation({
    mutationKey: ["register-user"],
    mutationFn: async (data) => {
      const response = await axios.post(`${apiUrl}/auth/signup`, data);
      return response.data;
    },
    onSuccess: () => {
      navigate("/login");
    },
    onError: (err) => {
      console.error("Signup error:", err.response?.data);
      setError(err.response?.data?.message || "Signup failed");
    },
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const { confirmPassword, ...submitData } = formData;
    mutate(submitData);
  };

  return (
    <>
      <NavBar />
      <Container maxWidth="sm" sx={{ mt: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Join a community of readers and writers
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Username"
            name="username"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            margin="normal"
            required
            onChange={handleChange}
          />
          <TextField
            fullWidth
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            margin="normal"
            required
            onChange={handleChange}
          />

          {error && (
            <Typography color="error" sx={{ mt: 1 }}>
              {error}
            </Typography>
          )}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            disabled={isPending}
          >
            {isPending ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Create Account"
            )}
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

export default SignupPage;
