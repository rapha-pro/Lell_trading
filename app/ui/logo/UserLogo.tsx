"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";

export default function UserLogo() {
  return (
    <Box display="flex" alignItems="center">
      <Image
        src="/assets/imageLogo.png" 
        alt="User Logo"
        width={40}
        height={40}
        className="rounded-sm"
      />


      <Box
        ml="3"
        fontSize="xl"
        fontWeight="bold"
        color="gray.700"
        _dark={{ color: "white" }}
      >
        Finance Flex
      </Box>
    </Box>
  );
}
