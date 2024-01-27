import score from "./images/score.png";
import React from "react";
import {
  Box,
  Card,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Button,
} from "@mui/material";
import Navbar from "./navbar";
import footer from "./images/footor.png";

import Mainnavbar from "./navbarmain";
const tableData = [
  { date: "15-03-23", score: "3/10" },
  { date: "27-10-23", score: "8/10" },
  { date: "01-01-24", score: "7/10" },
];

export default function Result() {
  return (
    <div>
      <div style={{ overflow: "hidden", marginTop: "100px" }}>
        <Mainnavbar />

        <div className="m-4 p-4">
          <Typography
            style={{
              fontWeight: 600,
              fontSize: "50px",
              color: "#333333",
              font: "Poppins",
              marginLeft: "50px",
              lineHeight: "75px",
              marginTop: "20px",
            }}
          >
            Your Score
          </Typography>
        </div>

        <div className="row m-4 p-4">
          <div className="col-md-6">
            {/* Your Image */}

            <div style={{ position: "relative", textAlign: "center" }}>
              <img
                src={score}
                style={{ width: "350px", height: "300px" }}
                alt="Score"
              />
              {/* Overlay Text */}
              <Typography
                variant="h1"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  fontFamily: "Poppins",
                  fontSize: "105px",
                  fontWeight: 600,
                  lineHeight: "158px",
                  letterSpacing: "0em",
                  textAlign: "center",
                  color: "#000000", // Set the color to match your design
                }}
              >
                8/10
              </Typography>
            </div>
          </div>
          <div className="col-md-6 " style={{ position: "relative" }}>
            <Card
              className="p-4"
              style={{
                width: "450px",
                height: " 350px",
                borderRadius: "20px",
                backgroundColor: "#D4ECFF",
                boxShadow: "0px 4px 4px 0px #D9ECFF80",
              }}
            >
              <Typography
                className="m-4"
                variant="h6"
                gutterBottom
                style={{
                  fontWeight: 600,
                  fontSize: "25px",
                }}
              >
                Previous Result
              </Typography>

              <TableContainer style={{ border: "1px solid black" }}>
                <Table>
                  <TableBody>
                    {/* Header Row */}
                    <TableRow>
                      <TableCell style={{ fontWeight: 600 }}>Date</TableCell>
                      <TableCell style={{ fontWeight: 600 }} align="right">
                        Score
                      </TableCell>
                    </TableRow>

                    {/* Data Rows */}

                    {tableData.map((row, index) => (
                      <TableRow key={index} style={{ borderBottom: "0px" }}>
                        <TableCell
                          component="th"
                          scope="row"
                          style={{ textAlign: "left", borderBottom: "0px" }}
                        >
                          {row.date}
                        </TableCell>
                        <TableCell align="right">{row.score}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Card>
          </div>
        </div>
        <div className="d-flex justify-content-center m-4">
          <Button
            href="#"
            style={{
              backgroundColor: " #fcc822",
              color: "black",
              textAlign: "center",
              borderRadius: "13px",
              font: "Poppins",
              fontWeight: 600,
              fontSize: "18px",
              // marginRight: "10px",
              //  padding: "25px",
              width: "180px",
              height: "60px",
            }}
          >
            View Results
          </Button>
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
