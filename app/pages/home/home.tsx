'use client';

import { Box, Flex } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import LeftPane from '../../ui/components/home/leftPane';
import RightPane from '../../ui/components/home/rightPane';
import { Suspense } from 'react';
import HomePageLoader from '../../ui/components/home/pageLoader';


export default function Home() {

  const textColor = 'customColor.primary-emphasized';
  const cardBg = 'gray.solid'; 
  const cardTextColor = 'gray.muted';  
  const cardIconColor = 'customColor.secondary';  
  const textStyle = {base: "sm", md: "md", lg: "lg"}

  return (
	<Suspense fallback={<HomePageLoader />}>
		<Box 
			id="home"
			bg="customColor.bg" 
			color={textColor} 
			py={20}
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
				textColor={textColor}
				textStyle={textStyle}
			/>
		</Box>
	</Suspense>
  );
}
