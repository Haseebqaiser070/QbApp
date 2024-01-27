import React from "react";
import TextField from "@mui/material/TextField";
import {
  Button,
  Box,
  Checkbox,
  Link,
  Stack,
  CardActionArea,
  Chip,
} from "@mui/material";
import image from "./images/image.png";
import logo from "./images/logo.png";
import Navbar from "./navbar";
import pay from "./images/mobile-payment 1.png";
import { Card } from "react-bootstrap";
import Mainnavbar from "./navbarmain";
import footor from "./images/footor.png";

export default function Uploads1() {
  return (
    <div>
      <div style={{ overflow: "hidden", marginTop: "100px" }}>
        <Mainnavbar />

        <div
          className="row"
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "70px",
          }}
        >
          <div className="col-md-6" style={{ paddingBottom: "30px" }}>
            <img src={pay} width="150px" height={"160px"}></img>
            <p
              style={{
                color: " #333333",
                font: "Poppins",
                padding: "1px",
                lineHeight: "50.5px",
                fontWeight: 700,
                fontSize: "35px",
              }}
            >
              Please make a small contribution to hosting costs for this site.
            </p>
            <p
              style={{
                //marginLeft: "20px",
                color: " #333333",
                //        borderRadius: "13px",
                font: "Poppins",
                // padding: "15px",
                lineHeight: "27.5px",
                fontWeight: 400,
                fontSize: "20px",
              }}
            >
              Thank you for choosing to upload a Question Bank! Before
              proceeding, a small fee is required to cover the processing and
              integration of your questions.
            </p>
          </div>
          <div className="col-md-6">
            <Card
              style={{
                padding: 50,
                backgroundColor: "#D4ECFF",
                borderRadius: "20px",
                marginRight: "20px",
                marginTop: "70px",
              }}
            >
              <Stack direction="column" spacing={2}>
                <Chip
                  label="Pay with Credit/debit Card"
                  //size="large"
                  component="a"
                  href="/Uploads2"
                  clickable
                  style={{
                    marginLeft: "20px",
                    color: " #1C1C1C",
                    //        borderRadius: "13px",
                    font: "Poppins",
                    backgroundColor: "#fcc822",
                    padding: "23px",
                    lineHeight: "20.5px",
                    fontWeight: 700,
                    fontSize: "13.93px",
                  }}
                />
                <Chip
                  label="Pay with PAYPAL"
                  component="b"
                  href="#"
                  clickable
                  style={{
                    marginLeft: "20px",
                    color: " #1C1C1C",
                    //        borderRadius: "13px",
                    font: "Poppins",
                    backgroundColor: "#fcc822",
                    padding: "23px",
                    lineHeight: "20.5px",
                    fontWeight: 700,
                    fontSize: "13.93px",
                  }}
                />
                <Chip
                  label="Pay with GPAY"
                  component="c"
                  href="#"
                  clickable
                  style={{
                    marginLeft: "20px",
                    color: " #1C1C1C",
                    //        borderRadius: "13px",
                    font: "Poppins",
                    backgroundColor: "#fcc822",
                    padding: "23px",
                    lineHeight: "20.5px",
                    fontWeight: 700,
                    fontSize: "13.93px",
                  }}
                />
                <Chip
                  label="Pay with APPLE PAY"
                  component="d"
                  href="#"
                  clickable
                  style={{
                    marginLeft: "20px",
                    color: " #1C1C1C",
                    //        borderRadius: "13px",
                    font: "Poppins",
                    backgroundColor: "#fcc822",
                    padding: "23px",
                    lineHeight: "20.5px",
                    fontWeight: 700,
                    fontSize: "13.93px",
                  }}
                />
              </Stack>
            </Card>
          </div>
        </div>
        <div>
          <img
            style={{ marginTop: "50px", marginBottom: "25px" }}
            src={footor}
          />
        </div>
      </div>
    </div>
  );
}
