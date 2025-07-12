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
    alert(`Registered with:\nName: ${formData.name}\nEmail: ${formData.email}`);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-100 to-blue-200 px-4">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl">
        <CardContent className="p-8 sm:p-10">
          <Box className="flex justify-center mb-6">
            <Avatar className="bg-purple-600 w-16 h-16 shadow-md">
              <PersonAddIcon fontSize="large" />
            </Avatar>
          </Box>

          <Typography
            variant="h5"
            align="center"
            className="font-bold mb-6 text-gray-800"
          >
            Create Your Account
          </Typography>

          <Box className="flex flex-col gap-5">
            <Box>
              <TextField
                label="Full Name"
                name="name"
                fullWidth
                value={formData.name}
                onChange={handleChange}
                variant="outlined"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
              />
            </Box>

            <Box>
              <TextField
                label="Email Address"
                name="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                variant="outlined"
                slotProps={{
                  inputLabel: { shrink: true },
                }}
              />
            </Box>

            <Box>
              <TextField
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                fullWidth
                value={formData.password}
                onChange={handleChange}
                variant="outlined"
                slotProps={{
                  inputLabel: { shrink: true },
                  input: {
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={togglePasswordVisibility} edge="end">
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  },
                }}
              />
            </Box>

            <Box>
              <TextField
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                value={formData.confirmPassword}
                onChange={handleChange}
                variant="outlined"
                slotProps={{
                  inputLabel: { shrink: true },
                  input: {
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
                  },
                }}
              />
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="rounded-full py-3 font-semibold"
              onClick={handleRegister}
            >
              Sign Up
            </Button>

            <Typography
              align="center"
              variant="body2"
              className="text-gray-600 pt-2"
            >
              Already have an account?{" "}
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                Login
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
