'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import LeftPane from '@/app/ui/components/about/leftPane';
import RightPane from '@/app/ui/components/about/rightPane';
import clsx from 'clsx';

export default function AboutPage() {

    const { colorMode, setColorMode, toggleColorMode } = useColorMode();

    const textColor = "customColor.primary-muted";
    const secondaryTextColor = "customColor.primary-emphasized";
    const cardBg = clsx({"gray.50": colorMode === "light", "gray.700": colorMode === "dark"})
    const cardBorder = useColorModeValue('gray.300', 'gray.600');
    const highlightColor = useColorModeValue(
        'customColor.secondary-emphasized._light',
        'customColor.secondary-emphasized._dark'
    );
    const textStyle = {base: "sm", md: "md", lg: "lg"}

    return (
    <Box 
        id="about"
        as="section"
        bg="customColor.bg"  
        py={10} 
        px={4}
     >
      <Flex
        maxW="container.xl"
        mx="auto"
        direction={{ base: 'column', lg: 'row' }}
        gap={10}
        align={{ base: 'center', lg: 'flex-start' }}
      >
        <LeftPane
          cardBg={cardBg}
          cardBorder={cardBorder}
          highlightColor={highlightColor}
          secondaryTextColor={secondaryTextColor}
          textStyle={textStyle}
        />
        <RightPane
          cardBg={cardBg}
          cardBorder={cardBorder}
          highlightColor={highlightColor}
          textColor={textColor}
          textStyle={textStyle}
        />
      </Flex>
    </Box>
  );
}
