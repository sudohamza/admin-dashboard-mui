import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import { Suspense } from "react";
import Grid from "@mui/material/Grid";
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
    <Suspense fallback={<h1>Loading</h1>}>
      {/* Container */}
      <Box display="flex" minHeight="100vh">
        {/* Inner Divs */}
        <Box sx={{ display: { xs: "none", md: "block" } }} flexGrow={1}>
          <Box>
            <Toolbar>
              <Stack py={2} direction="row" alignItems="center">
                <Box mt={0.5}>
                  <svg
                    width="55px"
                    height="55px"
                    viewBox="0 0 24 24"
                    version="1.1"
                  >
                    <g
                      stroke="none"
                      stroke-width="1"
                      fill="none"
                      fill-rule="evenodd"
                    >
                      <g
                        id="Shape"
                        transform="translate(-48.000000, -48.000000)"
                        fill-rule="nonzero"
                      >
                        <g
                          id="hexagon_fill"
                          transform="translate(48.000000, 48.000000)"
                        >
                          <path
                            d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                            id="MingCute"
                            fill-rule="nonzero"
                          ></path>
                          <path
                            d="M10.75,2.56687 C11.5235,2.12029 12.4765,2.12029 13.25,2.56687 L19.5443,6.20084 C20.3178,6.64743 20.7943,7.47274 20.7943,8.36591 L20.7943,15.6339 C20.7943,16.527 20.3178,17.3523 19.5443,17.7989 L13.25,21.4329 C12.4765,21.8795 11.5235,21.8795 10.75,21.4329 L4.45581,17.7989 C3.68231,17.3523 3.20581,16.527 3.20581,15.6339 L3.20581,8.36591 C3.20581,7.47274 3.68231,6.64743 4.45581,6.20084 L10.75,2.56687 Z"
                            fill={theme.palette.primary.light}
                          ></path>
                        </g>
                      </g>
                    </g>
                    <text
                      fontSize="13"
                      fontWeight="bold"
                      x="7"
                      y="16"
                      fill={theme.palette.background.default}
                    >
                      H
                    </text>
                  </svg>
                </Box>
                <Box>
                  <Typography
                    variant="button"
                    fontWeight="bold"
                    color={theme.palette.primary.light}
                    fontSize={24}
                  >
                    amza ali
                  </Typography>
                </Box>
              </Stack>
            </Toolbar>
            <Box color="primary.contrastText" textAlign="center">
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
              src="assets/login-picture.png"
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
        <Box
          display="flex"
          sx={{
            minWidth: "400px",
            maxWidth: { md: "450px" },
            backgroundColor: "#fff",
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
                  <Box mt={0.5}>
                    <svg
                      width="100px"
                      height="100px"
                      viewBox="0 0 24 24"
                      version="1.1"
                    >
                      <g
                        stroke="none"
                        stroke-width="1"
                        fill="none"
                        fill-rule="evenodd"
                      >
                        <g
                          id="Shape"
                          transform="translate(-48.000000, -48.000000)"
                          fill-rule="nonzero"
                        >
                          <g
                            id="hexagon_fill"
                            transform="translate(48.000000, 48.000000)"
                          >
                            <path
                              d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z"
                              id="MingCute"
                              fill-rule="nonzero"
                            ></path>
                            <path
                              d="M10.75,2.56687 C11.5235,2.12029 12.4765,2.12029 13.25,2.56687 L19.5443,6.20084 C20.3178,6.64743 20.7943,7.47274 20.7943,8.36591 L20.7943,15.6339 C20.7943,16.527 20.3178,17.3523 19.5443,17.7989 L13.25,21.4329 C12.4765,21.8795 11.5235,21.8795 10.75,21.4329 L4.45581,17.7989 C3.68231,17.3523 3.20581,16.527 3.20581,15.6339 L3.20581,8.36591 C3.20581,7.47274 3.68231,6.64743 4.45581,6.20084 L10.75,2.56687 Z"
                              fill={theme.palette.primary.light}
                            ></path>
                          </g>
                        </g>
                      </g>
                      <text
                        fontSize="13"
                        fontWeight="bold"
                        x="7"
                        y="16"
                        fill={theme.palette.background.default}
                      >
                        H
                      </text>
                    </svg>
                  </Box>
                  <Box>
                    <Typography
                      variant="button"
                      fontWeight="bold"
                      color={theme.palette.primary.light}
                      fontSize={24}
                    >
                      amza ali
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box mt={5} color="primary.contrastText">
                <Typography variant="h5" fontWeight="bold">
                  Sign in to Minimal
                </Typography>
                <Typography mt={2}>
                  New user?
                  <Link mx={1} href="#" underline="hover" variant="body2">
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
                <Typography display="inline">
                  Use email :&nbsp;
                  <Typography display="inline" fontWeight="bold">
                    demo@example.com
                    <Typography display="inline">
                      &nbsp; password :{" "}
                      <Typography display="inline" fontWeight="bold">
                        demo1234
                      </Typography>
                    </Typography>
                  </Typography>
                </Typography>
              </Paper>
              <Stack my={4} gap={3}>
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
                    endAdornment={
                      <InputAdornment position="end"></InputAdornment>
                    }
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
                <Typography ml="auto" mt={2}>
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
