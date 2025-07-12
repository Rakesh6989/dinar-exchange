"use client";

import {
  Card,
  CardContent,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Divider,
  Chip,
  Container,
} from "@mui/material";
const orders = [
  {
    id: 1,
    title: "White Shirt CL-741 Tricolor Ink Cartridge",
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=772&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1535,
    seller: "InksRefill",
    expected: "Fri, Oct 26th '18",
    status: "Processing",
    steps: ["Ordered", "Packed", "Shipped", "Delivered"],
    activeStep: 2,
    deliveryInfo: "Seller is processing your order - 6:27 am",
  },
  {
    id: 2,
    title: "Shirt PG-740 Ink Cartridge",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1045,
    seller: "RefillTown",
    expected: "Fri, Oct 26th '18",
    status: "Processing",
    steps: ["Ordered", "Packed", "Shipped", "Delivered"],
    activeStep: 2,
    deliveryInfo: "Seller is processing your order - 6:27 am",
  },
];

export default function TrackOrderPage() {
  const total = orders.reduce((sum, o) => sum + o.price, 0);

  return (
    <Container className="  mx-auto px-4 py-8 space-y-8" maxWidth="lg">
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Order Tracking
      </Typography>

      {orders.map((order) => (
        <Card key={order.id} elevation={2}>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            {/* Left Image */}
            <div className="w-full sm:w-1/3 flex justify-center sm:justify-start">
              <img
                src={order.image}
                alt={order.title}
                className="h-24 object-contain"
              />
            </div>

            {/* Right Content */}
            <div className="flex-1 space-y-3">
              {/* Title & Price Row */}
              <div className="flex justify-between items-start">
                <div>
                  <Typography variant="subtitle1" fontWeight={600}>
                    {order.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Seller: {order.seller}
                  </Typography>
                </div>
                <div className="text-right">
                  <Typography variant="subtitle1" fontWeight={600}>
                    ₹{order.price}
                  </Typography>
                  <Chip
                    label={order.status}
                    size="small"
                    color="info"
                    variant="outlined"
                    className="mt-1"
                  />
                </div>
              </div>

              {/* Stepper */}
              <Stepper activeStep={order.activeStep} alternativeLabel>
                {order.steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>

              {/* Delivery Info */}
              <Typography variant="body2" color="text.secondary">
                {order.deliveryInfo}
              </Typography>
              <Typography variant="body2">
                <span className="font-medium">Delivery expected by:</span>{" "}
                {order.expected}
              </Typography>

              {/* Buttons */}
              <div className="flex gap-2 justify-end pt-2">
                <Button variant="outlined" size="small" color="error">
                  Cancel Item
                </Button>
                <Button variant="contained" size="small" color="primary">
                  Need Help?
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <Divider />

      <div className="text-right">
        <Typography variant="h6" fontWeight={600}>
          Total: ₹{total}
        </Typography>
      </div>
    </Container>
  );
}
