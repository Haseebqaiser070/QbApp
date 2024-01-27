import React from "react";
import { useState } from "react";
import {
  Button,
  Box,
  Checkbox,
  Link,
  Stack,
  CardActionArea,
  Chip,
  Container,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
} from "@mui/material";
import image from "./images/image.png";
import logo from "./images/logo.png";
import Navbar from "./navbar";
import credit from "./images/credit.png";
import visa from "./images/visa.png";
import pay from "./images/mobile-payment 1.png";
import footer from "./images/footor.png";



import Snavbar from "./navsignup";
export default function Creditcard() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handleSaveCardChange = (event) => {
    setSaveCard(event.target.value === "yes");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle payment submission
  };

  return (
    <div>
      <div style={{ backgroundColor: "#A2C1E0", marginTop: "150px" }}>
        <Snavbar />

        <div
          className="row"
          style={{
            marginLeft: "50px",
            marginRight: "50px",
            marginTop: "70px",
          }}
        >
          <div
            className="col-md-6"
            style={{ paddingBottom: "30px", marginTop: "50px" }}
          >
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
              Support this site with a small contribution to hosting cost
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
              Take the first step towards enhancing our collective<br></br>{" "}
              knowledge. Register, contribute, and empower learning!
            </p>
          </div>
          <div className="col-md-6">
            <Card
              style={{
                width: "500px",
                height: "640px",
                padding: 40,
                backgroundColor: "#D4ECFF",
                borderRadius: "20px",
                marginRight: "20px",
                marginBottom: "80px",
              }}
            >
              <p
                style={{
                  color: " #282828",
                  font: "Poppins",
                  padding: "1px",
                  lineHeight: "50.5px",
                  fontWeight: 700,
                  textAlign: "center",
                  fontSize: "48px",
                  marginTop: "20px",
                }}
              >
                $210.00
              </p>
              <Stack direction="row" spacing={9} style={{ marginTop: "50px" }}>
                <img
                  src={credit}
                  width="163px"
                  height={"20px"}
                  style={{ marginRight: "100px" }}
                ></img>
                <img src={visa} width="140px" height={"23px"}></img>
              </Stack>
              <Chip
                label="Pay securely with your Bank Account using Visa or Mastercard"
                component="c"
                href="#"
                clickable
                style={{
                  //marginLeft: "20px",
                  color: " #383838",
                  //        borderRadius: "13px",
                  marginTop: "20px",
                  font: "Poppins",
                  backgroundColor: "#f3f3f3",
                  padding: "23px",
                  width: "500px",
                  height: "80px",
                  lineHeight: "20.5px",
                  fontWeight: 400,
                  fontSize: "14px",
                  height: "50px",
                }}
              />

              <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                  <TextField
                    label="Label"
                    InputProps={{
                      style: {
                        borderRadius: "16px",
                      },
                    }}
                    //value={cardNumber}
                    //onChange={(event) => setCardNumber(event.target.value)}
                    required
                  />
                </FormControl>
                <FormControl fullWidth margin="normal">
                  <TextField
                    label="Name on Card"
                    size="medium"
                    InputProps={{
                      style: {
                        borderRadius: "16px",
                        // width: "358px",
                        // height: "40px",
                      },
                    }} //value={cardName}
                    //onChange={(event) => setCardName(event.target.value)}
                    required
                  />
                </FormControl>
                <FormControl sx={{ marginTop: 1 }}>
                  <Stack spacing={4} direction="row">
                    <TextField
                      fullWidth
                      type="date"
                      variant="outlined"
                      InputProps={{
                        style: {
                          // width: "171px",
                          //height: "40px",
                          borderRadius: "16px",
                        },
                      }} //color='secondary'
                      //  label="Expirey Date"
                      //onChange={e => setFirstName(e.target.value)}
                      //value={firstName}
                      //fullWidth
                      required
                    />
                    <TextField
                      fullWidth
                      type="text"
                      variant="outlined"
                      InputProps={{
                        style: {
                          borderRadius: "16px",
                        },
                      }} // color='secondary'
                      label="CVV"
                      //onChange={e => setLastName(e.target.value)}
                      //value={lastName}
                      //fullWidth
                      required
                    />
                  </Stack>
                </FormControl>
                <Link
                  style={{
                    // marginRight: "180px",
                    color: "#000000",
                    textDecoration: "none",
                  }}
                >
                  <Checkbox /> Save card for future payments
                </Link>

                <div
                  className="d-flex justify-content-center"
                  style={{
                    marginBottom: "50px",
                  }}
                >
                  <Button
                    type="submit"
                    style={{
                      backgroundColor: " #fcc822",
                      color: "black",
                      borderRadius: "20px",
                      font: "Poppins",
                      padding: "15px",
                      float: "center",
                      lineHeight: "20px",
                      fontWeight: 700,
                      fontSize: "14px",
                      width: "225px",
                      height: "40px",
                      marginTop: "30px",
                      textAlign: "center",
                      //marginRight: "30px",
                    }}
                    href="/Payments1"
                  >
                    PROCEED
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
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
