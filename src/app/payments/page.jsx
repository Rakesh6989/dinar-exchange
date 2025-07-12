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
  Avatar,
} from "@mui/material";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

export default function CoolPaymentPage() {
  const [tab, setTab] = useState(0);
  const [open, setOpen] = useState(false);

  const handleTabChange = (e, newValue) => setTab(newValue);
  const handlePay = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center px-4 py-10">
      <Card className="w-full max-w-5xl shadow-2xl rounded-3xl">
        <CardHeader
          avatar={<Avatar><CreditCardIcon /></Avatar>}
          title={
            <Typography variant="h5" className="font-bold text-gray-800">
              Secure Payment Gateway
            </Typography>
          }
          subheader={<Typography className="text-sm text-gray-500">Powered by MUI & Tailwind</Typography>}
          className="text-center"
        />

        <CardContent className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <Box className="space-y-5">
            <Typography variant="h6" className="font-semibold text-gray-700">
              Billing Details
            </Typography>
            <TextField label="Full Name" fullWidth />
            <TextField label="Email Address" fullWidth />
            <TextField label="Phone Number" fullWidth />
            <TextField label="Shipping Address" fullWidth multiline rows={2} />

            <Divider className="!my-6" />

            <Typography variant="h6" className="font-semibold text-gray-700">
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
              <Tab icon={<CurrencyRupeeIcon />} label="UPI" />
              <Tab icon={<CreditCardIcon />} label="Card" />
              <Tab icon={<AccountBalanceWalletIcon />} label="Wallet" />
              <Tab icon={<CurrencyRupeeIcon />} label="Netbanking" />
            </Tabs>

            {tab === 0 && <TextField label="UPI ID" fullWidth placeholder="yourname@upi" />}

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

          {/* Right Side */}
          <Box className="bg-white border border-gray-200 rounded-xl p-6 space-y-6 shadow-inner">
            <Typography variant="h6" className="text-gray-700 font-bold">
              Order Summary
            </Typography>
            <Box className="flex justify-between text-sm">
              <Typography>Product Name</Typography>
              <Typography>₹849</Typography>
            </Box>
            <Box className="flex justify-between text-sm">
              <Typography>Shipping Charges</Typography>
              <Typography>₹50</Typography>
            </Box>
            <Divider />
            <Box className="flex justify-between font-semibold text-lg">
              <Typography>Total</Typography>
              <Typography>₹899</Typography>
            </Box>

            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handlePay}
              className="rounded-full py-3 text-base"
            >
              Pay ₹899 Securely
            </Button>
          </Box>
        </CardContent>
      </Card>

      {/* Modal */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle className="text-green-600 font-bold text-center">
          ✅ Payment Successful
        </DialogTitle>
        <DialogContent className="text-center">
          <Typography>Your order has been placed successfully!</Typography>
          <Typography className="text-sm text-gray-500 mt-2">
            A confirmation email has been sent to your inbox.
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
