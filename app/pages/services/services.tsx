// ServicesPage.tsx
'use client';

import { Box, Container, VStack, Heading, Text, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { ServiceCard } from '@/app/ui/components/services/serviceCards';
import { ServiceCardSkeleton } from '@/app/ui/components/services/serviceCardSkeleton';
import { servicesList } from '@/app/utils/serviceData';
import { Suspense } from 'react';

export default function ServicesPage() {
  const cardWidth = { base: '100%', md: 'calc(50% - 2rem)', lg: 'calc(33.33% - 2rem)' };

  return (
    <Box 
		id="services"
		as="section" 
		bg="customColor.bg" 
		minH="100vh" 
		py={{base: 8, lgL:20}} 
		px={4}
		display="flex" 
		alignItems="center" 
		justifyContent="center"
	>
      <Container maxW="container.xl">
        <VStack spacing={4} mb={16} textAlign="center">
          <Heading 
			fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
			bgGradient="linear(to-r, yellow.400, yellow.600)" 
			color="customColor.primary-light-emphasized"
			pb={12}
		>
            Services
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
              <Box key={service.title} width={cardWidth}>
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
