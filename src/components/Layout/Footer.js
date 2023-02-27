import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
// import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Typography } from "@mui/material";
const Footer = () => {
  return (
    <>
      <Box
        sx={{ textAlign: "center", bgcolor: "#511609", color: "bisque", p: 1 }}
      >
        <Box
          sx={{
            my: 2,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <a href="https://www.instagram.com/dostean_surat/?igshid=YmMyMTA2M2Y%3D"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" color="bisque"/>
      </a>
          <TwitterIcon />
          <YouTubeIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:400px)": {
              fontSize: "0.5rem",
            },
          }}
        >
         Bunglow No. 2, Jalarm Society, Night Bazar Road, Piplod, Surat-394370
        </Typography>
      </Box>
    </>
  );
};

export default Footer;