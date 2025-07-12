import { Box, Typography } from "@mui/material";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export default function TestimonialCard({ testimonial }) {
  return (
    <Box className="bg-white p-4 rounded-lg shadow-md text-left w-full h-full">
      <Box className="flex items-center gap-2 mb-2">
        <Box className="bg-black text-white text-sm px-2 py-1 rounded-full flex items-center gap-1">
          {testimonial.rating}
          <StarIcon style={{ fontSize: 14, color: "yellow" }} />
        </Box>
        <Typography variant="caption" color="textSecondary">
          {testimonial.date}
        </Typography>
      </Box>

      <Typography variant="body2" className="mb-2 text-sm">
        {testimonial.review}
      </Typography>
      <Typography variant="subtitle2" className="font-semibold mb-2">
        {testimonial.name}
      </Typography>
      <Image
        src={testimonial.image}
        alt={testimonial.name}
        width={200}
        height={200}
        className="rounded-md w-full h-auto object-cover"
      />
    </Box>
  );
}
