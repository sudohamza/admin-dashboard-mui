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

const Dashboard = () => {
  const theme = useTheme();
  return (
    <Grid spacing={2} container>
      <Grid lg={8} item>
        <Paper elevation={0} sx={{ backgroundColor: "#f4f6f8" }}>
          <Paper
            elevation={0}
            sx={{ px: 5, backgroundColor: "secondary.light" }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Box>
                <Typography fontWeight="bold" color="primary.dark" variant="h5">
                  Congratulations! <br /> Jayson Frankie
                </Typography>
                <Typography py={3} color="primary.main">
                  Best seller of the month You have done 57.6% more <br /> sales
                  today.
                </Typography>
                <Button variant="contained">Go Now</Button>
              </Box>
              <Box>
                <HeroSvg />
              </Box>
            </Stack>
          </Paper>
        </Paper>
      </Grid>
      <Grid lg={4} item>
        <Paper></Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
