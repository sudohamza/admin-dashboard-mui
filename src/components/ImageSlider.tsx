import {
  Box,
  Button,
  Paper,
  Slide,
  Stack,
  CardContent,
  Card,
  Typography,
  ListItem,
  List,
} from "@mui/material";
import React, { useEffect, useState } from "react";

const data = [
  {
    id: 1,
    title: "Boston Soft FootBed Sandal",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_5.jpg",
  },
  {
    id: 2,
    title: "Nike Air Zoom Shoes",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_3.jpg",
  },
  {
    id: 3,
    title: "Nike Air Force One ",
    img: "https://api-prod-minimal-v510.vercel.app/assets/images/m_product/product_1.jpg",
  },
];

type MyCardProps = {
  title: string;
  img: string;
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
const styles = {
  activeSlide: {
    transform: "translateX(0%)",
  },
  previousSlide: {
    transform: "translateX(-100%)",
  },
  nextSlide: {
    opacity: 0,
    transform: "translateX(100%)",
  },
  default: {
    transition: "transform 1s",
    position: "absolute",
    inset: 0,
  },
};

const ImageSlider = () => {
  const [cards, setCards] = useState(data);
  const [index, setCurrentCard] = useState(0);
  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentCard((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(timerID);
  }, []);

  return (
    <Paper
      sx={{
        height: { xs: "307px" },
        overflow: "hidden",
      }}
    >
      <Box sx={{ height: "100%", position: "relative" }}>
        <Box>
          {cards.map((item, personIndex) => {
            return (
              <Box
                sx={
                  personIndex === index
                    ? { ...styles.default, ...styles.activeSlide }
                    : personIndex === index - 1 ||
                      (index === 0 && personIndex === cards.length - 1)
                    ? { ...styles.default, ...styles.previousSlide }
                    : { ...styles.default, ...styles.nextSlide }
                }
                key={personIndex}
              >
                <MyCard key={index} {...item} />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Paper>
  );
};

export default ImageSlider;
