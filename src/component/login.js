import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Box, Checkbox, Link } from "@mui/material";
import image from "./images/image.png";
import logo from "./images/logo.png";

export default function Login() {
  return (
    <div style={{ overflow: "hidden" }}>
      <div className="row" style={{ height: "100vh" }}>
        <div
          className="col-md-6"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            // paddingTop: "80px",
            overflow: "auto", // Add overflow auto to handle vertical overflow
          }}
        >
          <img src={logo} alt="Logo" />
          <br />
          <div>
            <p
              style={{
                paddingTop: "10px",
                lineHeight: "22.5px",
                fontSize: "15px",
              }}
            >
              Welcome back!
              <br />
              Please Login/Signup to your account.
            </p>
          </div>
          <Box
            sx={{
              maxWidth: "100%",
              padding: "9px",
              width: "80%",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              paddingLeft: "15px",
            }}
          >
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email Address"
              style={{ paddingBottom: "10px" }}
            />
            <TextField
              fullWidth
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <div style={{ marginBottom: "20px", marginTop: "20px" }}>
              <Link
                style={{
                  marginRight: "180px",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                <Checkbox style={{ marginLeft: "-41px" }} /> Remember Me{" "}
              </Link>
              <Link
                style={{
                  //paddingLeft: "150px",
                  color: "#000000",
                  textDecoration: "none",
                }}
              >
                Forgot Password
              </Link>
            </div>
            <div style={{ textAlign: "left" }}>
              <Button
                href="/Login"
                style={{
                  backgroundColor: "#FCC822",
                  boxShadow:
                    " 0px 10.450244903564453px 23.22276496887207px -6.966829299926758px #FBE18F",
                  fontSize: "13px",
                  lineHeight: "14px",
                  width: "71px",
                  height: "37px",
                  fontWeight: 400,
                  font: "Poppins",
                  color: "black",
                  marginRight: "10px",
                }}
              >
                <b> Login</b>
              </Button>
              <Button
                href="/Signup"
                style={{
                  backgroundColor: "#FCC822",
                  color: "black",
                  boxShadow:
                    " 0px 10.450244903564453px 23.22276496887207px -6.966829299926758px #FBE18F",
                  fontSize: "13px",
                  lineHeight: "14px",
                  width: "71px",
                  height: "37px",
                  fontWeight: 400,
                  font: "Poppins",
                }}
              >
                Signup
              </Button>
            </div>
          </Box>
        </div>

        <div
          className="col-md-6"
          style={{
            backgroundImage: "url( image.png )",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%", // Ensure the image takes up the full height
          }}
        ></div>
      </div>
    </div>
  );
}
