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
import LockIcon from "@mui/icons-material/Lock";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  const handleLogin = () => {
    // handle login logic here
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-blue-200 px-4">
      <Card className="max-w-md w-full shadow-xl rounded-3xl">
        <CardContent className="p-8">
          <Box className="flex justify-center mb-6">
            <Avatar className="bg-blue-500 w-16 h-16">
              <LockIcon fontSize="large" />
            </Avatar>
          </Box>
          <Typography variant="h5" align="center" className="font-bold mb-6 text-gray-800">
            Welcome Back
          </Typography>

          <Box className="space-y-4">
            <TextField
              label="Email Address"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Box className="flex justify-end">
              <Typography variant="body2" className="text-blue-600 cursor-pointer hover:underline">
                Forgot Password?
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="rounded-full py-3"
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography align="center" variant="body2" className="text-gray-600 mt-4">
              Don't have an account?{" "}
              <span className="text-blue-600 cursor-pointer hover:underline">
                Register
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
