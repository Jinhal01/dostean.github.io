import React from "react";
import Layout from "./../components/Layout/Layout";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import pic from '../images/qr.jpeg'

import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";


const Contact = () => {
  
  return (
    <Layout>
      
      <Box sx={{ my: 5, ml: 10, "& h4": { fontWeight: "bold", mb: 2 , fontFamily: "Dancing Script, cursive", } }}>
        <Typography variant="h4">Contact Us</Typography>
        <p>
          Find us at: <br></br>
          Bungalow No. 2, Jalarm Society, Night Bazar Road, Piplod, Surat.   <br></br>   We are open from 12:00PM to 11:30 PM.
        </p>
      </Box>
      <Box
        sx={{
          m: 3,
          width: "600px",
          ml: 10,
          float:"left",
          "@media (max-width:600px)": {
            width: "300px",
            backgroundColor:'#E4C0B8',
          },
        }}
      >
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{ color: "red", pt: 1 }} /> 1800-00-0000
                  (tollfree)
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "brown", pt: 1 }} /> dosteasurat@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <CallIcon sx={{ color: "green", pt: 1 }} /> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <h2>
        Pay Us At
        </h2>
        <img src={pic} alt="" height={300} float="right" width={200}/>
        
    </Layout>
  );
};

export default Contact;