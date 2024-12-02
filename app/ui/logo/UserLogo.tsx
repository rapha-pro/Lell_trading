"use client";

import { Box } from "@chakra-ui/react";
import React from "react";

export default function UserLogo() {
  return (
    <Box display="flex" alignItems="center">
      {/* SVG for the logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        width="40"
        height="40"
        fill="none"
      >
        <rect width="100" height="100" rx="15" fill="url(#gradient)" />
        <path
          d="M30 70 L30 30 L70 30"
          stroke="#FFFFFF"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="70" cy="70" r="5" fill="#FFFFFF" />
        <defs>
          <linearGradient
            id="gradient"
            x1="0"
            y1="330"
            x2="100"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#38B2AC" />
            <stop offset="1" stopColor="#4FD1C5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Name */}
      <Box
        ml="3"
        fontSize="xl"
        fontWeight="bold"
        color="gray.700"
        _dark={{ color: "white" }}
      >
        TradeFlow
      </Box>
    </Box>
  );
}
