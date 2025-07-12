"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Tabs,
  Tab,
  Typography,
  MenuItem,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export default function CoolPaymentPage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);

  const handleTabChange = (e, newValue) => setTab(newValue);
  const handlePay = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-4xl shadow-2xl rounded-3xl">
        <CardHeader
          title={
            <Typography variant="h5" className="text-center font-bold text-gray-800">
              💳 Complete Your Payment
            </Typography>
          }
        />
        <CardContent className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Billing + Payment Info */}
          <Box className="space-y-4">
            <Typography variant="subtitle1" fontWeight="600">
              Billing Information
            </Typography>
            <TextField label="Full Name" fullWidth />
            <TextField label="Email Address" fullWidth />
            <TextField label="Phone Number" fullWidth />
            <TextField label="Shipping Address" fullWidth />

            <Divider className="!my-6" />

            <Typography variant="subtitle1" fontWeight="600">
              Payment Method
            </Typography>

            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
              textColor="primary"
              indicatorColor="primary"
              className="mb-4"
            >
              <Tab label="UPI" />
              <Tab label="Card" />
              <Tab label="Wallet" />
              <Tab label="Netbanking" />
            </Tabs>

            {/* Tab Panels */}
            {tab === 0 && (
              <TextField label="UPI ID" fullWidth placeholder="yourname@upi" />
            )}
            {tab === 1 && (
              <Box className="space-y-4">
                <TextField label="Card Number" fullWidth placeholder="1234 5678 9012 3456" />
                <Box className="grid grid-cols-2 gap-4">
                  <TextField label="Expiry" placeholder="MM/YY" />
                  <TextField label="CVV" placeholder="123" />
                </Box>
              </Box>
            )}
            {tab === 2 && (
              <TextField select label="Choose Wallet" fullWidth defaultValue="">
                <MenuItem value="gpay">Google Pay</MenuItem>
                <MenuItem value="phonepe">PhonePe</MenuItem>
                <MenuItem value="amazon">Amazon Pay</MenuItem>
              </TextField>
            )}
            {tab === 3 && (
              <TextField select label="Select Bank" fullWidth defaultValue="">
                <MenuItem value="sbi">SBI</MenuItem>
                <MenuItem value="hdfc">HDFC</MenuItem>
                <MenuItem value="icici">ICICI</MenuItem>
                <MenuItem value="axis">Axis</MenuItem>
              </TextField>
            )}
          </Box>

          {/* Right Side - Summary + Pay Button */}
          <Box className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-sm">
            <Typography variant="h6" fontWeight="bold">
              Order Summary
            </Typography>
            <Box className="flex justify-between">
              <span>Product</span>
              <span>₹849</span>
            </Box>
            <Box className="flex justify-between">
              <span>Shipping</span>
              <span>₹50</span>
            </Box>
            <Divider />
            <Box className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₹899</span>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handlePay}
            >
              Pay ₹899 Now
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Modal on Payment Success */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-green-600 font-bold text-center">
          ✅ Payment Successful
        </DialogTitle>
        <DialogContent className="text-center">
          <Typography>Your order has been placed successfully.</Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            A confirmation has been sent to your email.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="primary" fullWidth>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
