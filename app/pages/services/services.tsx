// ServicesPage.tsx
'use client';

import { Box, Container, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { ServiceCard } from '@/app/ui/components/services/serviceCards';
import { ServiceCardSkeleton } from '@/app/ui/components/services/serviceCardSkeleton';
import { servicesList } from '@/app/utils/serviceData';
import { Suspense } from 'react';

export default function ServicesPage() {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box 
		as="section" 
		bg={bgColor} 
		minH="100vh" 
		py={2} 
		px={4}
		display="flex" 
		alignItems="center" 
		justifyContent="center"
	>
      <Container maxW="container.xl">
	 	 <Heading 
		 	textStyle="xl"  
			color={useColorModeValue('gray.700', 'gray.200')}
			textAlign="center"
			>
            Service
          </Heading>
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold" bgGradient="linear(to-r, yellow.400, yellow.600)" bgClip="text">
            Our Services
          </Heading>
          <Text fontSize="xl" color={useColorModeValue('gray.600', 'gray.400')} maxW="2xl">
            Comprehensive trading and investment solutions tailored to your financial goals
          </Text>
        </VStack>
        <Suspense
          fallback={
            <Flex flexWrap="wrap" gap={8} justify="center">
              {[...Array(9)].map((_, i) => (
                <ServiceCardSkeleton key={i} />
              ))}
            </Flex>
          }
        >
          <Flex flexWrap="wrap" gap={8} justify="center">
            {servicesList.map((service, index) => (
              <Box key={service.title} width={{ base: '100%', md: 'calc(50% - 2rem)', lg: 'calc(33.33% - 2rem)' }}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  index={index}
                />
              </Box>
            ))}
          </Flex>
        </Suspense>
      </Container>
    </Box>
  );
}
