'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import LeftPane from './LeftPane';
import RightPane from './RightPane';

export default function Home() {

  const bg = useColorModeValue('gray.50', 'gray.subtle');
  const textColor = 'gray.600' || useColorModeValue('gray.600', 'gray.300')  
  const cardBg = 'gray.solid'; 
  const cardTextColor = 'gray.muted';  
  const cardIconColor = 'yellow.500';  

  return (
    <Box 
      bg={bg} 
      minHeight="100vh" 
      color={textColor} 
      pt={20}
      px={6}
    >
      <Flex 
        maxW="container.xl" 
        mx="auto" 
        alignItems="center" 
        flexDirection={['column', 'row']}
        gap={12}
      >
        <LeftPane textColor={textColor}/>
        <RightPane 
			cardBg={cardBg}
			cardTextColor={cardTextColor}
			cardIconColor={cardIconColor}
        />
      </Flex>
    </Box>
  );
}
