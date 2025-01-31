'use client';

import { motion } from 'motion/react';
import { Box, Flex, Text, VStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import StockCards from './stockCards';
import { getTrendingCryptos, type TrendingCoin } from '@/app/utils/trendingCards/getCryptos';
import { homeServices } from '@/app/utils/home/homeServices';
import homeText from '@/app/utils/home/homeText';

interface LeftPaneProps {
    textColor: string;
    textStyle: TextStyle; 
}

interface TextStyle {
    base: string;
    md: string;
    lg: string
}

interface StockData {
	name: string;
	company: string;
	price: number;
	change: number;
	volume: number;
}


const LeftPane: React.FC<LeftPaneProps> = ({ textColor, textStyle }) => {

	const [trendingCoins, setTrendingCoins] = useState<TrendingCoin[]>([]);

	useEffect(() => {
		const fetchData = async () => {
		  const data = await getTrendingCryptos();
		  setTrendingCoins(data);
		};
		
		fetchData();
		const timeInterval = 60 * 10**4 // Update every 10 minutes
		const interval = setInterval(fetchData, timeInterval);
		
		// Cleanup interval on unmount
		return () => clearInterval(interval);
	  }, []);
     
    return (
      <Box 
        color={textColor} 
        pt={[8, 8, 20]}
        px={[8]}

      >
        <Flex 
			maxW="container.xl" 
			mx="auto" 
			direction={['column', 'row']}
			gap={12}
			alignItems="center"
			justifyContent="center"
			w="100%"
			h="100%"
        >
          {/* Hero Section with Content */}
          <VStack 
            alignItems={{lg: "flex-start"}}
            flex={1} 
            textAlign={['center', 'left']}
          >
			<motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
				<VStack gap={7}  alignItems={{sm:"flex-start"}} >
					<Text textStyle={{base: "2xl", md: "3xl", lg: "4xl"}} fontWeight={500} color="primary-muted">{homeText.homeText_title}</Text>
					<Text textStyle={textStyle} color={textColor}> {homeText.homeText_description}</Text>
					<Text textStyle={{base: "md", md: "lg", lg: "xl"}} fontWeight={400} paddingBottom={1} color={textColor}> {homeText.homeServices_title}</Text>
				</VStack>
			</motion.div>
  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Text textStyle={textStyle} color={textColor} maxW={['breakpoint-sm', 'breakpoint-md', 'breakpoint-lg']} >
				{homeText.homeServices_description}
              </Text>
            </motion.div>

  
            {/* Feature Section with Icon & Text Animation */}
            <Flex
			    flexDirection="row"
				flexWrap="wrap"
				gap={5}
				alignItems={['flex-start']} 
				mt={8}
            >
			{homeServices.map(({ id, icon: Icon, delay, text }) => (
				<motion.div
					key={id}
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay, duration: 0.7 }}
				>
					<Box
						p={5}
						bg="yellow.500"
						color="white"
						borderRadius="md"
						display="flex"
						alignItems="center"
						boxShadow="xl"
						_hover={{ transform: "scale(1.02)" }}
						transition="transform 0.2s ease-in-out"
					>
						<Icon size={32} className="mr-4">
						</Icon>
						<Text fontWeight="bold" textStyle={textStyle}>
							{text}
						</Text>
					</Box>
				</motion.div>
			))}
            </Flex>
			<VStack
				mt={14}
				py={[4, 8, 8]}
				px={1}
				w="100%"
				alignItems="center"
				justifyContent="center"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
				>
					<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={8} color="gray.emphasized">
						Top Trending Currencies
					</Heading>
				</motion.div>
				<Flex 
					flexWrap="wrap" 
					gap={6} 
					direction="row"
					justifyContent="center" 
					alignItems="center"
				>
					{trendingCoins.map((coin) => (
						<StockCards
							key={coin.name}
							name={coin.name}
							symbol={coin.symbol}
							price={coin.price}
							change={coin.change}
							volume={coin.volume}
							thumb={coin.thumb}
							textColor={textColor}
						/>
					))}
				</Flex>
			</VStack>
			</VStack>
        </Flex>
      </Box>
    );
  }
  

export default LeftPane;