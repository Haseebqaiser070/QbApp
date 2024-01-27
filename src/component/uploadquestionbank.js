import React, { useRef } from "react";
import TextField from "@mui/material/TextField";
import footor from "./images/footor.png";
import { styled } from "@mui/material/styles";
import { Button, Box, Checkbox, Link, Divider } from "@mui/material";
import image from "./images/image.png";
import logo from "./images/logo.png";
import upload from "./images/upload (1) 1.png";
import Payments1 from "./paymentscreen1";
import Mainnavbar from "./navbarmain";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function Uploadquebank() {
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    // Trigger the hidden file input when the button is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    // Handle the selected file here
    const selectedFile = e.target.files[0];
    console.log("Selected file:", selectedFile);
  };
  return (
    <div style={{ overflow: "hidden", marginTop: "100px" }}>
      <Mainnavbar></Mainnavbar>
      <div className="row p-4">
        <div className="col-md-8">
          <h2
            style={{
              //    backgroundColor: " #fcc822",
              color: " #333333",
              borderRadius: "13px",
              font: "Poppins",
              padding: "15px",
              lineHeight: "52.5px",
              fontWeight: 600,
              fontSize: "35px",
              textAlign: "left",
              marginLeft: "20px",
            }}
          >
            Upload a Question Bank
          </h2>
          <Divider
            sx={{
              width: "135px",
              height: "6px",
              border: "solid 2px #FCC832",
              color: "#FCC832",
              backgroundColor: "#FCC832",
              textAlign: "left", // Adjust as needed
              marginLeft: "30px", // Adjust as needed
            }}
          />
          <div
            style={{
              marginTop: "50px",
              //width: " 731px",
              //height: "471px",
              // top: "379px",
              // left: "94px",
              marginLeft: "20px",
              color: " #333333",
              //        borderRadius: "13px",
              font: "Poppins",
              padding: "15px",
              lineHeight: "27.5px",
              fontWeight: 400,
              fontSize: "20px",
            }}
          >
            <p style={{ marginBottom: "30px" }}>
              1. Before uploading, please ensure your .xls file follows our
              formatting guidelines. You can find detailed instructions here on
              how to structure your files.
            </p>
            <p style={{ marginBottom: "30px" }}>
              2. Name your Question Bank: Please use the following naming
              convention as this will helps organize your question banks
              efficiently.
              <br></br>Example: "Biology_Quiz_Questions_Jan2023"
            </p>
            <p>
              3. Upload your file, and you're all set! Your questions will be
              integrated into the database, ready for users to access.
            </p>
          </div>
        </div>
        <div className="col-md-4 mt-4">
          <Button
            style={{
              backgroundColor: " #fcc822",
              color: " #2E3899",
              borderRadius: "13px",
              font: "Poppins",
              padding: "15px",
              lineHeight: "52.5px",
              fontWeight: 700,
              fontSize: "13.93px",
              width: "224px",
              height: "48px",
              float: "right",
              marginRight: "100px",
            }}
            href="/Questionbank"
          >
            MY QUESTION BANK
            <VisuallyHiddenInput type="file" />
          </Button>
          <div
            className="row"
            style={{
              marginTop: "100px",
              //  borderRadius: "100px",
              //marginBottom: 10,
              //float: "center",
              marginLeft: "20px",
            }}
          >
            <div className="col-md-9">
              <label htmlFor="fileInput">
                <a href="/Uploads1">
                  <img
                    src={upload}
                    width="220px"
                    height="220px"
                    style={{ marginTop: "20px" }}
                    //onClick={Payments1}
                  />
                </a>
              </label>
            </div>
            <div className="row">
              <span
                style={{
                  font: "Poppins",
                  fontWeight: 400,
                  fontSize: "20px",
                  marginLeft: "45px",
                }}
              >
                Upload .xlx file
              </span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          style={{
            marginTop: "50px",
            marginBottom: "25px",
            maxWidth: "100%",
            height: "auto",
          }}
          src={footor}
        />
      </div>
    </div>
  );
}
