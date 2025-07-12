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
    image: "https://images.unsplash.com/photo-1602810315761-dce6a6b06638",
  },
  {
    id: 2,
    title: "Blue Slim Fit Jeans",
    price: 1799,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1c5",
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
            {/* Cart Items */}
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
                    <Typography variant="body2" fontWeight="bold" className="mt-1">
                      Total: ₹{item.price * item.quantity}
                    </Typography>
                  </div>
                  <IconButton onClick={() => handleRemove(item.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Box>
              ))}
            </div>

            {/* Price Summary */}
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
