import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useRef } from "react";
import NavBar from "../../Components/NavBar/NavBar";

export default function MyProfilePage() {
  const [profileImage, setProfileImage] = useState(null);
  const fileInputRef = useRef();

  const [profileInfo, setProfileInfo] = useState({
    phone: "",
    occupation: "",
    bio: "",
    status: "",
    secondaryEmail: "",
  });

  const [personalInfo, setPersonalInfo] = useState({
    firstName: "Francis",
    lastName: "Muraya",
    email: "francis@example.com",
    username: "FrancisDev",
  });

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleProfileImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfileImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleProfileChange = (e) =>
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });

  const handlePersonalChange = (e) =>
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });

  const handlePasswordChange = (e) =>
    setPasswordInfo({ ...passwordInfo, [e.target.name]: e.target.value });

  return (
    <>
      <NavBar />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          My Profile
        </Typography>

        
        <Typography variant="h6" sx={{ mt: 4 }}>
          Profile Info
        </Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
            <Avatar
              src={profileImage}
              sx={{ width: 72, height: 72, mr: 2 }}
            />

            <Button
              variant="outlined"
              onClick={() => fileInputRef.current.click()}
            >
              Upload Profile Photo
            </Button>
            <input
              type="file"
              accept="image/*"
              hidden
              ref={fileInputRef}
              onChange={handleProfileImageUpload}
            />
          </Box>

          <TextField
            fullWidth
            label="Phone"
            name="phone"
            margin="normal"
            onChange={handleProfileChange}
          />
          <TextField
            fullWidth
            label="Occupation"
            name="occupation"
            margin="normal"
            onChange={handleProfileChange}
          />
          <TextField
            fullWidth
            label="Bio"
            name="bio"
            multiline
            rows={3}
            margin="normal"
            onChange={handleProfileChange}
          />
          <TextField
            fullWidth
            label="Status"
            name="status"
            margin="normal"
            onChange={handleProfileChange}
          />
          <TextField
            fullWidth
            label="Secondary Email"
            name="secondaryEmail"
            margin="normal"
            onChange={handleProfileChange}
          />

          <Button variant="contained" sx={{ mt: 2 }}>
            Save Profile Info
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        
        
        <Typography variant="h6">Personal Info</Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="First Name"
            name="firstName"
            required
            margin="normal"
            value={personalInfo.firstName}
            onChange={handlePersonalChange}
          />
          <TextField
            fullWidth
            label="Last Name"
            name="lastName"
            required
            margin="normal"
            value={personalInfo.lastName}
            onChange={handlePersonalChange}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            required
            margin="normal"
            value={personalInfo.email}
            onChange={handlePersonalChange}
          />
          <TextField
            fullWidth
            label="Username"
            name="username"
            required
            margin="normal"
            value={personalInfo.username}
            onChange={handlePersonalChange}
          />

          <Button variant="contained" sx={{ mt: 2 }}>
            Update Personal Info
          </Button>
        </Box>

        <Divider sx={{ my: 4 }} />

        {/* Password Update */}
        <Typography variant="h6">Change Password</Typography>
        <Box component="form" sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Current Password"
            name="oldPassword"
            type="password"
            required
            margin="normal"
            onChange={handlePasswordChange}
          />
          <TextField
            fullWidth
            label="New Password"
            name="newPassword"
            type="password"
            required
            margin="normal"
            onChange={handlePasswordChange}
          />
          <TextField
            fullWidth
            label="Confirm New Password"
            name="confirmNewPassword"
            type="password"
            required
            margin="normal"
            onChange={handlePasswordChange}
          />

          <Button variant="contained" sx={{ mt: 2 }}>
            Update Password
          </Button>
        </Box>
      </Container>
    </>
  );
}
