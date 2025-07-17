"use client";

import FlexBetween from "../FlexBetween";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { QueryStats } from "@mui/icons-material";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      width="100%"
      zIndex={10}
      bgcolor="white" // Set a background to avoid content showing through
      boxShadow={1} // Optional: add shadow for elevation
    >
      <FlexBetween width="100%" height="40px">
        <Box ml={2} pr={16}>
          <Image
            src="/stepUpIcon.png"
            alt="Step Up Icon"
            width={80}
            height={29}
          />
        </Box>
        <Box>
          <Typography
            fontWeight={500}
            fontSize="16px"
            color="#238D95"
            lineHeight={1.5}
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "#238D95",
              },
            }}
          >
            Session Guides
          </Typography>
        </Box>
        <Box>
          <Typography
            fontWeight={500}
            fontSize="16px"
            color="#3F3F3F"
            lineHeight={1.5}
            sx={{
              "&:hover": {
                cursor: "pointer",
                color: "#238D95",
              },
            }}
          >
            Support Channels
          </Typography>
        </Box>
        <FlexBetween gap={1}>
          <Box>
            <Typography
              fontWeight={500}
              fontSize="16px"
              color="#3F3F3F"
              lineHeight={1.5}
              sx={{
                "&:hover": {
                  cursor: "pointer",
                  color: "#238D95",
                },
              }}
            >
              Announcements
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "#E4E4E4",
              borderRadius: "50%",
              height: "19px",
              width: "19px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography
              fontWeight={500}
              fontSize="16px"
              color="#000000"
              lineHeight={1.5}
            >
              1
            </Typography>
          </Box>
        </FlexBetween>
        <Box mr={2}>
          <QueryStats />
        </Box>
      </FlexBetween>
    </Box>
  );
};

export default Navbar;
