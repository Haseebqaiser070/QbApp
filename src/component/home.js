import React from "react";
import TextField from "@mui/material/TextField";
import { Button, Box, Checkbox, Link, Stack } from "@mui/material";
import image from "./images/image.png";
import logo from "./images/logo.png";
import Navbar from "./navbar";
import footer from "./images/footor.png";

export default function Home() {
  return (
    <div>
      <div style={{ marginTop: "100px" }}>
        <Navbar />

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <p
            style={{
              fontFamily: "Poppins",
              fontSize: "27px",
              fontWeight: 600,
              lineHeight: "41px",
              letterSpacing: "0em",
              textAlign: "center",
              //marginBottom: "81px",
              margin: "50px",
              padding: "40px",
              //marginLeft: "50px",
              wordWrap: "break-word", // Add this line
              maxWidth: "100%", // Add this line
              //marginRight: "30px",
            }}
          >
            QBApp is a website designed to support your learning. Either upload
            your own question bank, or have our AI produce one for you. Research
            shows that answering questions is highly effective as a learning
            technique. It is the most effective way to prepare for any
            examination
          </p>
        </div>
        <div>
          <Stack spacing={5} direction="row" style={{ textAlign: "center", justifyContent: "center", alignItems: "center" }}>
            <Button
              href="/Uploadquebank"
              style={{
                backgroundColor: " #fcc822",
                color: "black",
                textAlign: "center",
                borderRadius: "20px",
                font: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                marginLeft: "30px",
                padding: "15px",
                width: "100%",
                maxWidth: "336px",
                marginBottom: "10px",
                marginRight: "10px",
              }}
            >
              UPLOAD YOUR OWN QUESTION<br></br> BANK(.XLS)
            </Button>

            <Button
              href="/Testknowledge"
              style={{
                backgroundColor: " #fcc822",
                color: "black",
                textAlign: "center",
                borderRadius: "20px",
                font: "Poppins",
                fontWeight: 700,
                fontSize: "14px",
                marginRight: "10px",
                padding: "25px",
                width: "100%",
                maxWidth: "336px",
                marginBottom: "10px",
              }}
            >
              TEST MY KNOWLEDGE
            </Button>
            <Button
              style={{
                backgroundColor: " #fcc822",
                color: "black",
                borderRadius: "20px",
                font: "Poppins",
                padding: "15px",
                lineHeight: "24px",
                fontWeight: 700,
                fontSize: "14px",
                width: "100%",
                maxWidth: "336px",
                marginBottom: "10px",
                textAlign: "center",
                marginRight: "30px",
              }}
              href="/Aibank"
            >
              ASK AI TO CREATE QUESTION BANK FROM YOUR DOCUMENT(.PDF OR .DOC)
            </Button>
          </Stack>
        </div>
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <img
            style={{
              marginTop: "50px",
              marginBottom: "25px",
              width: "100%",
              height: "auto",
            }}
            src={footer}
            alt="Footer"
          />
        </div>
      </div>
    </div>
  );
}
