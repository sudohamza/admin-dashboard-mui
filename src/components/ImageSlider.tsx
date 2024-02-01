import {
  Box,
  Button,
  Paper,
  Slide,
  Stack,
  CardContent,
  Card,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "One",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
  },
  {
    id: 2,
    title: "Two",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
  },
  {
    id: 3,
    title: "Three",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
  },
];

type MyCardProps = {
  title: string;
  img: string;
};

const styles = {
  activeSlide: {},
  previousSlide: {},
  nextSlide: {},
  default: {},
};

const MyCard = ({ title, img }: MyCardProps) => {
  return (
    <Box position="relative" height="100%" width="100%">
      <Box
        component="img"
        sx={{ objectFit: "cover" }}
        src={img}
        height="300px"
        width="100%"
      ></Box>

      <Box
        position="absolute"
        width="100%"
        p={2}
        py={3}
        bottom={0}
        sx={{
          background:
            "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)",
        }}
      >
        <Typography color="#fff" variant="h5">
          {title}
        </Typography>
        <Button sx={{ mt: 2 }} variant="contained">
          Buy Now
        </Button>
      </Box>
    </Box>
  );
};

const ImageSlider = () => {
  const [cards, setCards] = useState(data);
  const [currentCard, setCurrentCard] = useState(1);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentCard((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <Paper
      sx={{
        height: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {cards.map((item, index) => {
        return (
          <Box
            position="absolute"
            sx={{
              inset: 0,
              transform: `translateX(${
                index < currentCard
                  ? -100
                  : index > currentCard
                  ? 100
                  : Math.abs(index - currentCard) > 1
                  ? 100
                  : 0
              }%)`,
              transition: "transform 1s",
            }}
            key={index}
          >
            <MyCard key={index} {...item} />
          </Box>
        );
      })}
    </Paper>
  );
};

export default ImageSlider;
