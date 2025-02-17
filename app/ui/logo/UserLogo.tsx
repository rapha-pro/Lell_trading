"use client";

import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useColorModeValue } from '@/components/ui/color-mode';

interface UserLogoProps {
  width?: number;
  height?: number;
  opacity?: number;
  src: string;
  lightModeColor?: string;
  darkModeColor?: string;
}

export default function UserLogo({
  width = 40,
  height = 40,
  opacity = 1,
  src,
  lightModeColor = 'gray.500',
  darkModeColor = 'gray.200',
}: UserLogoProps) {
    const [isMounted, setIsMounted] = useState(false);

    // Wait for hydration to complete
    useEffect(() => {
        setIsMounted(true);
    }, []);

    const color = useColorModeValue(lightModeColor, darkModeColor);

    if (!isMounted) {
        return null;
    }

  return (
    <Box display="flex" alignItems="center" opacity={opacity}>
      <Image
        src={src} 
        alt="User Logo"
        width={width}
        height={height}
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
