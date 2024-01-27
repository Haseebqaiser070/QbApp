import {
  Avatar,
  Button,
  Card,
  FormControl,
  FormGroup,
  FormLabel,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import Image from "./images/image.png";
import Navbar from "./navbar";
import Mainnavbar from "./navbarmain";
import footer from "./images/footor.png";


export default function Profile() {
  return (
    <div style={{ marginTop: "100px" }}>
      <Mainnavbar />
      {/* <Card style={{ padding: 50 }}>
          <h6>General Setting </h6>
        </Card> */}
      <Card
        style={{
          padding: 100,
          backgroundColor: "#A2C1E0",
          boxShadow: "0px 0px 0px 0px",
        }}
      >
        <p
          style={{
            font: "Poppins",
            fontSize: "45px",
            fontWeight: 600,
            lineHeight: "67.5px",
            letterSpacing: "0em",
            textAlign: "left",
            marginBottom: "50px",
            color: " #333333",
          }}
        >
          My Profile
        </p>
        <Card
          style={{
            padding: 50,
            backgroundColor: "#D4ECFF",
            borderRadius: "10px",
          }}
        >
          <div>
            <img
              src={Image}
              width="100px"
              height={"100px"}
              style={{
                borderRadius: "100px",
                marginBottom: 10,
                float: "center",
                marginRight: 50,
              }}
            ></img>

            <Button
              variant="contained"
              //color="#FCC822"
              // size="small"
              style={{
                backgroundColor: " #fcc822",
                color: "black",
                textAlign: "center",
                borderRadius: "100px",
                font: "Outfit",
                fontWeight: 500,
                fontSize: "10px",
                marginLeft: "30px",
                padding: "5px,16px,5px,16px",
                width: "93px",
                height: "23px",
                marginRight: "10px",
              }}
              component="label"
            >
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </div>

          <div className="row">
            <Card
              style={{
                padding: "20px",
                marginTop: "30px",
                backgroundColor: "#D4ECFF",
                border: "1px solid #00000026",
              }}
            >
              <p
                style={{
                  font: "Outfit",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#1F1F1FB2",
                  marginTop: "13px",
                }}
              >
                Your Name
              </p>
              <div className="row">
                <div className="col-md-8">
                  <p
                    style={{
                      font: "Outfit",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#222222E5",
                    }}
                  >
                    Sid
                  </p>
                </div>
                <div className="col-md-4">
                  <Button
                    variant="contained"
                    //color="#FCC822"
                    //size="small"
                    style={{
                      backgroundColor: " #fcc822",
                      color: "black",
                      textAlign: "center",
                      borderRadius: "72.66px",
                      font: "Outfit",
                      fontWeight: 500,
                      fontSize: "7.27px",
                      marginLeft: "220px",
                      padding: "5px,16px,5px,16px",
                      width: "46px",
                      height: "18px",
                      //marginRight: "10px",
                    }}
                    component="label"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <p
                style={{
                  font: "Outfit",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#1F1F1FB2",
                  marginTop: "13px",
                }}
              >
                Phone Number
              </p>
              <div className="row">
                <div className="col-md-8">
                  <p
                    style={{
                      font: "Outfit",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#222222E5",
                    }}
                  >
                    0987654321
                  </p>
                </div>
                <div className="col-md-4">
                  <Button
                    variant="contained"
                    //color="#FCC822"
                    //size="small"
                    style={{
                      backgroundColor: " #fcc822",
                      color: "black",
                      textAlign: "center",
                      borderRadius: "72.66px",
                      font: "Outfit",
                      fontWeight: 500,
                      fontSize: "7.27px",
                      marginLeft: "220px",
                      padding: "5px,16px,5px,16px",
                      width: "46px",
                      height: "18px",
                      //marginRight: "10px",
                    }}
                    component="label"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <p
                style={{
                  font: "Outfit",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#1F1F1FB2",
                  marginTop: "13px",
                }}
              >
                Email
              </p>
              <div className="row">
                <div className="col-md-8">
                  <p
                    style={{
                      font: "Outfit",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#222222E5",
                    }}
                  >
                    Sid987@gmail.com
                  </p>
                </div>
                <div className="col-md-4">
                  <Button
                    variant="contained"
                    //color="#FCC822"
                    //size="small"
                    style={{
                      backgroundColor: " #fcc822",
                      color: "black",
                      textAlign: "center",
                      borderRadius: "72.66px",
                      font: "Outfit",
                      fontWeight: 500,
                      fontSize: "7.27px",
                      marginLeft: "220px",
                      padding: "5px,16px,5px,16px",
                      width: "46px",
                      height: "18px",
                      //marginRight: "10px",
                    }}
                    component="label"
                  >
                    Edit
                  </Button>
                </div>
              </div>
              <p
                style={{
                  font: "Outfit",
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "15px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#1F1F1FB2",
                  marginTop: "13px",
                }}
              >
                Password
              </p>
              <div className="row">
                <div className="col-md-8">
                  <p
                    style={{
                      font: "Outfit",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "15px",
                      letterSpacing: "0em",
                      textAlign: "left",
                      color: "#222222E5",
                    }}
                  >
                    9876543456
                  </p>
                </div>
                <div className="col-md-4">
                  <Button
                    variant="contained"
                    //color="#FCC822"
                    //size="small"
                    style={{
                      backgroundColor: " #fcc822",
                      color: "black",
                      textAlign: "center",
                      borderRadius: "72.66px",
                      font: "Outfit",
                      fontWeight: 500,
                      fontSize: "7.27px",
                      marginLeft: "220px",
                      padding: "5px,16px,5px,16px",
                      width: "46px",
                      height: "18px",
                      //marginRight: "10px",
                    }}
                    component="label"
                  >
                    Edit
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Card>
      </Card>
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
