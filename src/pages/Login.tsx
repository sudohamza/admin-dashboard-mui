import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import {
  Paper,
  Toolbar,
  Typography,
  Link,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import InfoIcon from "@mui/icons-material/Info";
import { RiEyeCloseLine } from "@react-icons/all-files/ri/RiEyeCloseLine";
import { RiEyeLine } from "@react-icons/all-files/ri/RiEyeLine";
import { UIContext } from "../context/ui";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import LinearLoading from "../components/LinearLoading";
import SvgLogo from "../svg/SvgLogo";
import loginImage from "../assets/login-picture.png";

let email = "demo@example.com";
let password = "demo1234";

const Login = () => {
  const { dispatch } = useContext(UIContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    if (formData.email === email && formData.password === password) {
      console.log("yes");
      dispatch({ type: "LOGGED_IN" });
      navigate("/");
    }
  };

  const theme = useTheme();
  return (
    <Suspense fallback={<LinearLoading />}>
      {/* Container */}
      <Box sx={{ transition: "all 5s ease" }} display="flex" minHeight="100vh">
        {/* Main text and hero image */}
        <Box sx={{ display: { xs: "none", md: "block" } }} flexGrow={1}>
          <Box>
            <Toolbar>
              <Stack py={2} direction="row" alignItems="center">
                <SvgLogo />
              </Stack>
            </Toolbar>
            <Box color="text.secondary" textAlign="center">
              <Typography variant="h4" fontWeight="bold">
                Hi, Welcome back
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              sx={{ width: { md: "450px", lg: "800px" } }}
              component="img"
              py={4}
              textAlign="center"
              src={loginImage}
            ></Box>
          </Box>

          <Stack
            alignItems="center"
            py={5}
            fontSize={50}
            justifyContent="center"
            direction="row"
            gap={4}
          >
            <FaReact />
            <SiMaterialUi />
            <SiTypescript />
            <SiWebpack />
          </Stack>
        </Box>
        {/* Login from  */}
        <Box
          display="flex"
          sx={{
            minWidth: "400px",
            maxWidth: { md: "450px" },
            backgroundColor: theme.palette.background.paper,
            flexGrow: { xs: 1, md: 0 },
          }}
        >
          <Box
            display="flex"
            alignItems="center"
            mx="auto"
            justifyContent="center"
          >
            <Box px={4}>
              <Box sx={{ display: { md: "none" } }}>
                <Stack
                  py={2}
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                >
                  <SvgLogo />
                </Stack>
              </Box>
              <Box mt={2} m={1} color="text.secondary">
                <Typography variant="h5" fontWeight="bold">
                  Sign in to Minimal
                </Typography>
                <Typography mt={2}>
                  New user?
                  <Link
                    mx={1}
                    to={"/register"}
                    underline="hover"
                    variant="body2"
                    component={NavLink}
                  >
                    Create an account
                  </Link>
                </Typography>
              </Box>
              <Paper
                elevation={0}
                sx={{
                  display: "flex  ",
                  backgroundColor: "secondary.light",
                  p: 1,
                  mt: 5,
                  color: "text.secondary",
                }}
              >
                <InfoIcon sx={{ color: "primary.main", mx: 1 }} />
                <Typography component="div" display="inline">
                  Use email :&nbsp;
                  <Typography
                    component="div"
                    display="inline"
                    fontWeight="bold"
                  >
                    demo@example.com
                    <Typography component="div" display="inline">
                      &nbsp; password :{" "}
                      <Typography
                        component="div"
                        display="inline"
                        fontWeight="bold"
                      >
                        demo1234
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Paper>
              {/* Register form  */}
              <Stack my={4} gap={1}>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="outlined-multiline-flexible">
                    Email address
                  </InputLabel>
                  <OutlinedInput
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    value={formData.email}
                    sx={{ borderRadius: "10px" }}
                    id="outlined-multiline-flexible"
                    label="Email address"
                  />
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    onChange={(e) => {
                      setFormData({ ...formData, password: e.target.value });
                    }}
                    value={formData.password}
                    sx={{ borderRadius: "10px" }}
                    id="outlined-adornment-password"
                    type={showPassword ? "text" : "password"}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <RiEyeLine /> : <RiEyeCloseLine />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <Typography ml="auto" mt={1}>
                  <Link mx={1} href="#" color="text.secondary" variant="body2">
                    Forgot password?
                  </Link>
                </Typography>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <Button
                    onClick={handleSubmit}
                    size="small"
                    sx={{
                      color: "#fff",
                      borderRadius: "10px",
                      p: 1,
                      fontSize: 18,
                    }}
                    variant="contained"
                  >
                    Login
                  </Button>
                </FormControl>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Suspense>
  );
};

export default Login;
