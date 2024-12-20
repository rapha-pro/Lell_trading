'use client';

import { Box, Skeleton } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';

export const ServiceCardSkeleton = () => (
  <Box width={{ base: '100%', md: 'calc(50% - 2rem)', lg: 'calc(33.33% - 2rem)' }}>
    <Skeleton
      height="300px"
      borderRadius="xl"
      startColor={useColorModeValue('gray.100', 'gray.700')}
      endColor={useColorModeValue('gray.200', 'gray.600')}
    />
  </Box>
);
