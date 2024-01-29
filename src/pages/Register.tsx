import React, { useContext, useState } from "react";
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
  TextField,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";
import { useTheme, FormLabel, FormGroup, FormHelperText } from "@mui/material";
import { Stack } from "@mui/system";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiMaterialUi } from "@react-icons/all-files/si/SiMaterialUi";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiWebpack } from "@react-icons/all-files/si/SiWebpack";
import { RiEyeCloseLine } from "@react-icons/all-files/ri/RiEyeCloseLine";
import { RiEyeLine } from "@react-icons/all-files/ri/RiEyeLine";
import { UIContext } from "../context/ui";
import { useNavigate } from "react-router-dom";
import LinearLoading from "../components/LinearLoading";
import SvgLogo from "../components/SvgLogo";

let email = "demo@example.com";
let password = "demo1234";

const Register = () => {
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
      <Box display="flex" minHeight="100vh">
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
                Manage the job more
              </Typography>
              <Typography variant="h4" fontWeight="bold">
                effectively with Minimal
              </Typography>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box
              sx={{ width: { md: "450px", lg: "800px" } }}
              component="img"
              py={4}
              textAlign="center"
              src="https://minimals.cc/assets/illustrations/illustration_dashboard.png"
            ></Box>
          </Box>

          <Stack
            alignItems="center"
            py={3}
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
        {/* Sign up from */}
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
            <Box minWidth="400px" px={4}>
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
              <Box mt={5} m={1} color="text.secondary">
                <Typography variant="h5" fontWeight="bold">
                  Get started absolutely free
                </Typography>
                <Typography mt={2}>
                  Already have an account?
                  <Link
                    mx={1}
                    to={"/login"}
                    component={NavLink}
                    underline="hover"
                    variant="body2"
                  >
                    Sign in
                  </Link>
                </Typography>
              </Box>

              <Stack my={4} gap={1} minWidth="350px">
                <Stack m={1} direction="row" gap={1}>
                  <TextField
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                      },
                    }}
                    sx={{ borderRadius: "10px" }}
                    label="First Name"
                    variant="outlined"
                  />
                  <TextField
                    InputProps={{
                      style: {
                        borderRadius: "10px",
                      },
                    }}
                    sx={{ borderRadius: "10px" }}
                    label="Last Name"
                    variant="outlined"
                  />
                </Stack>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <FormGroup>
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
                  </FormGroup>
                </FormControl>
                <FormControl sx={{ m: 1 }} variant="outlined">
                  <FormGroup>
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
                  </FormGroup>
                </FormControl>
                <FormControl sx={{ m: 1, my: 5 }} variant="outlined">
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
                    Create account
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

export default Register;
