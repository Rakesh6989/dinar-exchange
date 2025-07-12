import { Box, Typography, Button } from "@mui/material";

export default function ComboCard({ combo }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: 2,
        background: "#fff",
        textAlign: "center",
        minWidth: 250,
        maxWidth: 280,
        height: "100%", // 👈 ensures full height
        mx: "auto",
      }}
    >
      {/* Image */}
      <Box
        component="img"
        src={combo.image}
        alt={combo.title}
        sx={{ width: "100%", objectFit: "cover", height: 200 }}
      />

      {/* Content */}
      <Box p={2} flexGrow={1} display="flex" flexDirection="column" justifyContent="space-between">
        <Typography fontWeight="bold" mb={1}>
          {combo.title}
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#FFD700",
              color: "black",
              fontWeight: "bold",
              borderRadius: "30px",
              px: 2,
              mb: 1,
              ":hover": { backgroundColor: "#f5c400" },
            }}
          >
            PICK ANY 3 AT ₹{combo.price}
          </Button>
          <Typography variant="caption">{combo.variants}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
