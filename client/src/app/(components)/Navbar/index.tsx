import FlexBetween from "../FlexBetween";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { QueryStats } from "@mui/icons-material";

const Navbar = () => {
  return (
    <FlexBetween width="100%" height="40px">
      <Box
        sx={{
          border: "2px solid black",
        }}
        ml={2}
        pr={16}
      >
        <Image
          src="/stepUpIcon.png"
          alt="Step Up Icon"
          width={80}
          height={29}
        />
      </Box>
      <Box
        sx={{
          border: "2px solid black",
        }}
      >
        <Typography
          fontWeight="500"
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
          Session Guides
        </Typography>
      </Box>
      <Box
        sx={{
          border: "2px solid black",
        }}
      >
        <Typography
          fontWeight="500"
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
      <FlexBetween
        gap={1}
        sx={{
          border: "2px solid black",
        }}
      >
        <Box>
          <Typography
            fontWeight="500"
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
            border: 1,
            borderRadius: "50%",
            height: "19px",
            width: "19px",
          }}
          justifyItems="center"
          alignItems="center"
        >
          <Typography
            fontWeight="300"
            fontSize="16px"
            color="#3F3F3F"
            lineHeight={1.5}
          >
            1
          </Typography>
        </Box>
      </FlexBetween>
      <Box
        sx={{
          border: "2px solid black",
        }}
        mr={2}
      >
        <QueryStats />
      </Box>
    </FlexBetween>
  );
};

export default Navbar;
