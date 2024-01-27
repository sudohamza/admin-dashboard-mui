import React from "react";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import Grid from "@mui/material/Grid";
import {
  Button,
  Paper,
  SvgIcon,
  Theme,
  Toolbar,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material";

const styles = {
  main: {
    display: "flex",
    height: "100vh",
  },
};

const Login = () => {
  const theme = useTheme();
  return (
    <Suspense fallback={<h1>Loading</h1>}>
      <Box sx={styles.main}>
        <Grid container>
          <Grid item lg={9}>
            <Box height="100%">
              <Typography
                sx={{ color: theme.palette.secondary.light }}
                variant="h3"
              >
                Hamza ali
              </Typography>
              <Toolbar>
                <SvgIcon>
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 100 100"
                    fill="none"
                  >
                    <polygon
                      points="50 1 95 25 95 75 50 99 5 75 5 25"
                      fill={`${theme.palette.primary.main}`}
                      strokeWidth="1"
                    />
                  </svg>
                </SvgIcon>
              </Toolbar>
            </Box>
          </Grid>
          <Grid item lg={3}>
            <Paper sx={{ height: "100%" }} elevation={0}>
              <Button onClick={() => {}}>Change</Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </Suspense>
  );
};

export default Login;
