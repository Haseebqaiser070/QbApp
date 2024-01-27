import React from "react";
import {
  Container,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
  Box,
} from "@mui/material";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import AttachmentIcon from "@mui/icons-material/Attachment";
import Navbar from "./navbar";
import Mainnavbar from "./navbarmain";
import footer from "./images/footor.png";



export default function Aibank() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Mainnavbar />
      <Container
        maxWidth="md"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px",
            backgroundColor: " #D4ECFF",
            boxShadow: "0px 4px 4px 0px #D9ECFF80",
            justifyContent: "center",
            marginTop: "50px",
            borderRadius: "20px",
            margin: "30px",
            height: "700px",
            width: "1000px",
          }}
        >
          <Typography
            className="m-4"
            variant="h4"
            style={{
              fontWeight: 600,
              fontSize: "35px",
              color: "#333333",
              fontFamily: "Poppins",
              lineHeight: "52px",
              textAlign: "center",
            }}
          >
            Use AI to Generate a QB
          </Typography>
          <Box
            style={{
              height: "400px",
              width: "900px",
              borderRadius: "12px",
              backgroundColor: "#a3c1dd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "20px 0",
            }}
          >
            {/* Internal Box Content Goes Here */}
          </Box>
          <FormControl
            standard="filled"
            fullWidth
            style={{
              backgroundColor: "#a3c1dd",
              height: "55px",
              width: "900px",
              // borderRadius: "8px",
              marginTop: "20px",
              // borderBlockStyle: "none",
            }}
          >
            <OutlinedInput
              id="outlined-adornment-weight"
              placeholder="Type your message"
              endAdornment={
                <InputAdornment position="end">
                  <AttachmentIcon
                    fontSize="large"
                    style={{ color: "#ffffff" }}
                  />
                  <DoubleArrowIcon
                    fontSize="large"
                    style={{ color: "#ffffff", marginRight: "20px" }}
                  />
                </InputAdornment>
              }
              inputProps={{
                "aria-label": "weight",
              }}
              style={{
                focused: "none",
                notchedOutline: "none",
                border: "none",
              }}
            />
          </FormControl>{" "}
        </Box>
      </Container>
      <div >
          <img
            style={{
              marginTop: "30px",
              marginBottom: "15px",
              width: "100%",
              height: "auto",
            }}
            src={footer}
            alt="Footer"
          />
        </div>
    </div>
  );
}
