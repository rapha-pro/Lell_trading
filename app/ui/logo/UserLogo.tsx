"use client";

import { Box } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { useColorModeValue } from '@/components/ui/color-mode';

export default function UserLogo() {
  const color = useColorModeValue('gray.500', 'gray.200');

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
        color={color}
      >
        Feathers
      </Box>
    </Box>
  );
}
