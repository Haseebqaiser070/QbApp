import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Paper,
  Typography,
  Table,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Divider,
  TextField,
  IconButton,
  Box,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Navbar from "./navbar";
import Mainnavbar from "./navbarmain";
import footer from "./images/footor.png";




const columns = [
  {
    id: "checkbox",
    // label: "Select",
    minWidth: 100,
    align: "center",
    format: (value) => <Checkbox color="primary" />,
  },
  { id: "questionBankName", label: "Question Bank Name", minWidth: 800 },
  {
    id: "action",
    label: "Action",
    minWidth: 200,
    align: "center",
    format: (value, index) => (
      <div>
        <Stack direction="row" spacing={1}>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{
              width: "78px",
              height: "26px",
              borderRadius: "4px",
              backgroundColor: "#FCC822",
              color: "#000",
            }}
            onClick={() => handleEdit(index)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            style={{
              width: "89px",
              height: "26px",
              borderRadius: "4px",
              backgroundColor: "#FF000F",
              color: "#000",
            }}
            onClick={() => handleDelete(index)}
          >
            Delete
          </Button>
        </Stack>
      </div>
    ),
  },
];

const rows = [
  { questionBankName: "KnowledgeQuest", action: "2" },
  { questionBankName: "QuizMasterPro", action: "2" },
  { questionBankName: "BrainTeasureHub", action: "2" },
  { questionBankName: "LearnAndTestHub", action: "2" },
  { questionBankName: "TrivalTreasury", action: "2" },
  { questionBankName: "InsightFullQuizzes", action: "2" },
  { questionBankName: "WisdomChallenge", action: "2" },
  { questionBankName: "SmartQuizVault", action: "2" },
];

const handleEdit = (id) => {
  // Implement your edit logic here
  console.log(`Editing row with id ${id}`);
};

const handleDelete = (index) => {
  // Update state by filtering out the row with the corresponding index
  const updatedRows = rows.filter((row, i) => i !== index);
  // Assuming you want to update the state or perform other actions after deletion
  console.log(`Deleting row with index ${index}`);
  // Update the state or perform other actions with the updatedRows
};

export default function Questionbank() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearch = () => {
    // Implement your search logic here
    // Filter the rows based on the searchTerm
    const filteredRows = rows.filter((row) =>
      row.questionBankName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Log the filtered rows or update the state as needed
    console.log("Filtered Rows:", filteredRows);
  };

  return (
    <div style={{ overflow: "hidden", marginTop: "100px" }}>
      <Mainnavbar />
      <div style={{ height: "50%", width: "100%", marginRight: "80px" }}>
        <Typography
          // minWidth={100}
          style={{
            fontWeight: 600,
            fontSize: "40px",
            font: "Inter",
            marginLeft: "80px",
            marginTop: "80px",
            //marginBottom: "px",
            //textAlign: "center",
          }}
        >
          My Question Bank
        </Typography>
        <Paper
          style={{
            marginTop: "40px",
            margin: "80px",
            background:
              "linear-gradient(0deg, #FFFFFF, #FFFFFF), linear-gradient(0deg, #E5E9EB, #E5E9EB)",
            border: "1px solid #E5E9EB",
          }}
        >
          <div className="row">
            <div className="col-md-9">
              <Typography
                // minWidth={100}
                style={{
                  fontWeight: 600,
                  fontSize: "14px",
                  font: "Inter",
                  marginLeft: 40,
                  marginTop: "20px",
                  marginBottom: "20px",
                  //textAlign: "center",
                }}
              >
                My Question Bank
              </Typography>
            </div>

            <div
              className="col-md-3"
              style={{
                display: "flex",
                alignItems: "right",
                justifyContent: "flex-end",
                paddingRight: "55px",
              }}
            >
              {isSearchVisible && (
                <Box>
                  <TextField
                    // variant="outlined"
                    size="small"
                    fullWidth
                    //color="black"
                    style={{ color: "black", marginTop: "10px" }}
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onBlur={() => setIsSearchVisible(false)}
                    autoFocus
                  />
                </Box>
              )}
              <IconButton onClick={() => setIsSearchVisible(!isSearchVisible)}>
                <SearchIcon
                  style={{
                    color: " black",
                  }}
                />
              </IconButton>
            </div>
          </div>{" "}
          <Divider color="#E0E0E0" />
          <TableContainer>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{
                        minWidth: column.minWidth,
                        font: "Poppins",
                        fontWeight: 700,
                        fontSize: "14px",
                        paddingBottom: "13px",
                        paddingTop: "13px",
                        letterSpacing: "-0.6%",
                      }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index}>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{
                          fontWeight: 400,
                          fontSize: "14px",
                          font: "Inter",
                          letterSpacing: "-o.6%",
                          padding: "1px",
                          height: "30px", // Adjust the height as needed
                        }}
                      >
                        {column.format
                          ? column.format(row[column.id])
                          : row[column.id]}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
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
