import {
  Box,
  Button,
  Grid,
  Paper,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import HeroSvg from "../components/HeroSvg";
import ImageSlider from "../components/ImageSlider";

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Grid spacing={2} container>
      <Grid xs={12} sm={12} md={8} lg={8} item>
        <Grid sx={{ backgroundColor: "#f4f6f8", borderRadius: "10px" }}>
          <Grid
            container
            justifyContent="space-around"
            alignItems="center"
            sx={{
              px: 5,
              borderRadius: "10px",
              backgroundColor: "secondary.light",
            }}
          >
            <Grid
              item
              sx={{
                py: 2,
                textAlign: { xs: "center", sm: "left", md: "left" },
              }}
            >
              <Typography fontWeight="bold" color="primary.dark" variant="h5">
                Congratulations! <br /> Jayson Frankie
              </Typography>
              <Typography py={3} color="primary.main">
                Best seller of the month You have done 57.6% more <br /> sales
                today.
              </Typography>
              <Button variant="contained">Go Now</Button>
            </Grid>
            <Grid
              px={2}
              sx={{ textAlign: { xs: "center", sm: "center", md: "right" } }}
              item
            >
              <HeroSvg />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid height="full" xs={12} sm={12} md={4} lg={4} item>
        <ImageSlider />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
