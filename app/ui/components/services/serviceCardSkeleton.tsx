'use client';

import { Box, Skeleton } from '@chakra-ui/react';

export const ServiceCardSkeleton = () => (
  <Box width={{ base: '100%', md: 'calc(50% - 2rem)', lg: 'calc(33.33% - 2rem)' }}>
    <Skeleton
		height="300px"
		borderRadius="xl"
    />
  </Box>
);
