"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  InputAdornment,
  IconButton,
  Avatar,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword((prev) => !prev);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    alert(`Registered with: \nName: ${formData.name}\nEmail: ${formData.email}`);
    // Add API call here
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 px-4">
      <Card className="max-w-md w-full shadow-xl rounded-3xl">
        <CardContent className="p-8">
          <Box className="flex justify-center mb-6">
            <Avatar className="bg-purple-500 w-16 h-16">
              <PersonAddIcon fontSize="large" />
            </Avatar>
          </Box>

          <Typography variant="h5" align="center" className="font-bold mb-6 text-gray-800">
            Create an Account
          </Typography>

          <Box className="space-y-4">
            <TextField
              label="Full Name"
              name="name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Email Address"
              name="email"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              fullWidth
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={togglePasswordVisibility} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              label="Confirm Password"
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={toggleConfirmPasswordVisibility}
                      edge="end"
                    >
                      {showConfirmPassword ? (
                        <VisibilityOff />
                      ) : (
                        <Visibility />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="rounded-full py-3"
              onClick={handleRegister}
            >
              Sign Up
            </Button>

            <Typography align="center" variant="body2" className="text-gray-600 mt-4">
              Already have an account?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Login
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
