import React from "react";
import logo from "./images/logo.png";
import { Button } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";

export default function Snavbar() {
  return (
    <nav
      style={{
        position: "fixed",
        // backgroundColor: "",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000 /* Adjust the z-index as needed */,
        backgroundColor: "#a2c1e0" /* Set your desired background color */,
        // boxShadow:  " 0px 4px 4px 0px rgba(0, 0, 0, 0.1)" /* Optional: Add a shadow */,
      }}
    >
      <div
        className="nav-inner"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 20px" /* Adjust the padding as needed */,
        }}
      >
        <span className="logo">
          <img src={logo} />
        </span>
        <div className="links">
          <a href="/Login">
            <Button
              href="/Login"
              style={{
                //  backgroundColor: "#FCC822",

                color: "black",
                marginRight: "10px",
              }}
            >
              SIGN IN
            </Button>
          </a>
          <a href="/Signup">
            <Button
              href="/Signup"
              style={{
                backgroundColor: "#FCC822",
                color: "black",
                width: "120px",
                height: "48px",
              }}
            >
              SIGN UP
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
