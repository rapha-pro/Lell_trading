'use client';

import { Box, Flex } from '@chakra-ui/react';
import { 
    Skeleton, 
    SkeletonCircle, 
    SkeletonText, 
  } from "@/components/ui/skeleton"
import { useColorModeValue } from '@/components/ui/color-mode';

// Loader for LeftPane
const LeftPaneSkeleton = () => {
  const bgColor = useColorModeValue('gray.100', 'gray.700');
  
  return (
    <Flex 
      direction="column" 
      width="full" 
      gap={6}
      bg={bgColor}
      p={6}
      borderRadius="xl"
    >
      <Flex align="center" gap={4}>
        <SkeletonCircle size="16" />
        <Flex direction="column" flex={1}>
          <Skeleton height="20px" width="200px" mb={2} />
          <Skeleton height="15px" width="150px" />
        </Flex>
      </Flex>
      
      <SkeletonText mt={4} noOfLines={4} spaceX={3} />
      
      <Flex gap={4}>
        <Skeleton height="40px" width="120px" borderRadius="md" />
        <Skeleton height="40px" width="120px" borderRadius="md" />
      </Flex>
    </Flex>
  );
};

// Loader for RightPane
const RightPaneSkeleton = () => {
  const cardBg = useColorModeValue('gray.700', 'gray.500');
  
  return (
    <Flex 
      flexWrap="wrap" 
      gap={6} 
      justifyContent="center"
    >
      {[1, 2, 3, 4].map((item) => (
        <Box 
          key={item} 
          width="290px" 
          bg={cardBg}
          p={6}
          borderRadius="xl"
          boxShadow="md"
        >
          <Flex direction="column" align="center">
            <SkeletonCircle size="12" mb={4} />
            <Skeleton height="20px" width="150px" mb={3} />
            <SkeletonText noOfLines={3} spaceX={2} width="full" />
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

// Main Home Page Loader
const HomePageLoader = () => {
  const bg = useColorModeValue('gray.800', 'gray.900');
  const textColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box 
      bg={bg} 
      minHeight="100vh" 
      color={textColor} 
      pt={20}
      px={6}
      maxW="container.xl" 
      mx="auto" 
      w="100%"
    >
      <Flex 
        direction={{ base: 'column', lg: 'row' }}
        gap={12}
        width="full"
      >
        <Box flex={1}>
          <LeftPaneSkeleton />
        </Box>
        <Box flex={1}>
          <RightPaneSkeleton />
        </Box>
      </Flex>
    </Box>
  );
};


export default HomePageLoader;