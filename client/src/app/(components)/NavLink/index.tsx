"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Box, Typography } from "@mui/material";

type NavLinkProps = {
  href: string;
  label: string;
};

const NavLink = ({ href, label }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Box component={Link} href={href} sx={{ textDecoration: "none" }}>
      <Typography
        fontWeight={500}
        fontSize="16px"
        color={isActive ? "#238D95" : "#3f3f3f"}
        lineHeight={1.5}
        sx={{
          "&:hover": {
            cursor: "pointer",
            color: "#238D95",
          },
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default NavLink;
