"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";
import { Box, Typography, Container } from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const renderedProducts = useMemo(() => {
    return products.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-md shadow-md p-4 hover:shadow-lg transition-all"
      >
        <div className="relative w-full h-60">
          <Image
            src={product.image}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
        <Typography variant="body2" fontWeight="bold" mt={1} className="mt-4">
          {product.title.slice(0, 50)}...
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{Math.round(product.price * 83)}
        </Typography>
        <Typography variant="caption" color="green">
          50% off
        </Typography>
      </div>
    ));
  }, [products]);

  return (
    <Box py={8} sx={{ backgroundColor: "#f9f9f9" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h5"
          align="center"
          fontWeight="bold"
          gutterBottom
        >
          Products You May Like
        </Typography>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {renderedProducts}
        </div>
      </Container>
    </Box>
  );
};

export default ProductList;
