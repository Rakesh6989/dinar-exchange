"use client";
import { useState } from "react";
import Image from "next/image";
import { Box, Typography, Button, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
const sampleCart = [
  {
    id: 1,
    title: "Cotton Printed T-Shirt",
    price: 449,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Blue Slim Fit Jeans",
    price: 1799,
    quantity: 1,
    image:
      "https://plus.unsplash.com/premium_photo-1691367279376-624618a5aac9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(sampleCart);

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <Box py={10} className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <Typography variant="h5" fontWeight="bold" className="mb-6 text-center">
          Your Shopping Cart
        </Typography>

        {cartItems.length === 0 ? (
          <Typography align="center">Your cart is empty.</Typography>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Box
                  key={item.id}
                  className="flex gap-4 bg-white p-4 rounded-md shadow-sm items-center"
                >
                  <div className="relative w-24 h-24 shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <Typography fontWeight="bold">
                      {item.title.slice(0, 50)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      ₹{item.price} × {item.quantity}
                    </Typography>
                    <Typography
                      variant="body2"
                      fontWeight="bold"
                      className="mt-1"
                    >
                      Total: ₹{item.price * item.quantity}
                    </Typography>
                  </div>
                  <IconButton
                    onClick={() => handleRemove(item.id)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </div>

            <div className="bg-white p-6 rounded-md shadow-md h-fit">
              <Typography variant="h6" fontWeight="bold" className="mb-4">
                Price Summary
              </Typography>
              <div className="flex justify-between text-sm mb-2">
                <span>Subtotal</span>
                <span>₹{totalAmount}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <hr className="my-2" />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>₹{totalAmount}</span>
              </div>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  backgroundColor: "#FFD700",
                  color: "black",
                  fontWeight: "bold",
                  borderRadius: "30px",
                  ":hover": {
                    backgroundColor: "#f5c400",
                  },
                }}
              >
                Proceed to Payment
              </Button>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
}
