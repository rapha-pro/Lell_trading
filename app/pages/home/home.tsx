'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import LeftPane from '../../ui/components/home/leftPane';
import RightPane from '../../ui/components/home/rightPane';
import { Suspense } from 'react';
import HomePageLoader from '../../ui/components/home/pageLoader';


export default function Home() {

  const bg = useColorModeValue('gray.50', 'gray.subtle');
  const textColor = 'gray.600' || useColorModeValue('gray.600', 'gray.300')  
  const cardBg = 'gray.solid'; 
  const cardTextColor = 'gray.muted';  
  const cardIconColor = 'yellow.500';  
  const textStyle = {base: "sm", md: "md", lgL: "lg"}

  return (
	<Suspense fallback={<HomePageLoader />}>
		<Box 
		bg={bg} 
		minHeight="100vh" 
		color={textColor} 
		pt={20}
		px={1}
		maxW="container.xl" 
		mx="auto" 
		display="flex"
		flexDirection={{base: "column", mdToLgL: "column", xl: "row"}}
		gap={12}
		w="100%" 
		
		>
			<LeftPane textColor={textColor} textStyle={textStyle}/>
			<RightPane 
				cardBg={cardBg}
				cardTextColor={cardTextColor}
				cardIconColor={cardIconColor}
				textStyle={textStyle}
			/>
		</Box>
	</Suspense>
  );
}
