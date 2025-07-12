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
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <Box className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-100 to-purple-200 px-4">
      <Card className="w-full max-w-md rounded-3xl shadow-2xl">
        <CardContent className="p-8 sm:p-10">
          <Box className="flex justify-center mb-6">
            <Avatar className="bg-blue-600 w-16 h-16 shadow-md">
              <LockIcon fontSize="large" />
            </Avatar>
          </Box>

          <Typography
            variant="h5"
            align="center"
            className="font-bold mb-6 text-gray-800"
          >
            Sign in to your account
          </Typography>

          <Box className="flex flex-col gap-6">
            <TextField
              label="Email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              slotProps={{
                input: {
                  className: "py-3 px-2",
                },
                inputLabel: {
                  shrink: true,
                },
              }}
            />

            <TextField
              label="Password"
              fullWidth
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              slotProps={{
                input: {
                  className: "py-3 px-2",
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton onClick={handleTogglePassword} edge="end">
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                },
                inputLabel: {
                  shrink: true,
                },
              }}
            />

            <Box className="-mt-2 flex justify-end">
              <Typography
                variant="body2"
                className="text-sm text-blue-600 hover:underline cursor-pointer"
              >
                Forgot password?
              </Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              className="rounded-full py-3 font-semibold"
              onClick={handleLogin}
            >
              Login
            </Button>

            <Typography
              variant="body2"
              align="center"
              className="text-gray-600 pt-2"
            >
              Don&apos;t have an account?{" "}
              <span className="text-blue-600 font-medium hover:underline cursor-pointer">
                Register
              </span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
