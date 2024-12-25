'use client';

import { motion } from 'motion/react';
import { Box, Flex, Text, VStack, Heading, HStack } from '@chakra-ui/react';
import { DollarSign, LogIn } from 'lucide-react';
import { useEffect, useState } from 'react';
import StockCards from './stockCards';
import { getTopStocks, getStockUpdates } from '@/app/utils/stocks_alphaVantage';
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

	const [stocks, setStocks] = useState<StockData[]>([]);

	useEffect(() => {
		// Initial fetch
		getTopStocks().then(setStocks);

		// Set up auto-updates every minute
		const cleanup = getStockUpdates(setStocks, 60000);

		// Cleanup on unmount
		return () => {
			cleanup.then(clearFn => clearFn());
		};
	}, []);
     
    return (
      <Box 
        color={textColor} 
        pt={[-16, -8, 20]}
        px={[8]}
        w="100%" 
      >
        <Flex 
			maxW="container.xl" 
			mx="auto" 
			flexDirection={['column', 'row']}
			gap={12}
			alignItems="center"
			justifyContent="center"
			h="100%"
        >
          {/* Hero Section with Content */}
          <VStack 
            alignItems="flex-start"
            flex={1} 
            textAlign={['center', 'left']}
          >
            <Text textStyle={textStyle} color={textColor}>
              Transforming market complexity into strategic investment opportunities with strategies and precision analysis.
            </Text>
  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Text textStyle={textStyle} color={textColor} maxW={['breakpoint-sm', 'breakpoint-md', 'breakpoint-lg']} >
                We combine technology with years experience to offer tailored trading solutions that drive growth. Whether you're a beginner or seasoned investor, we provide insights that can help you thrive in the ever-changing global market.
              </Text>
            </motion.div>

  
            {/* Feature Section with Icon & Text Animation */}
            <VStack 
              alignItems={['center', 'flex-start']} 
              mt={8}
            >
				<motion.div 
				initial={{ opacity: 0, scale: 0.9 }} 
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: 0.5, duration: 0.7 }}
				>
					<Box 
						p={5} 
						bg="yellow.500" 
						color="white" 
						borderRadius="md" 
						display="flex" 
						alignItems="center" 
						boxShadow="xl"
						_hover={{ scale: 1.02 }}
						transition="scale 0.s ease-in-out"
					>
					<DollarSign size={32} className="mr-4" />
					<Text fontWeight="bold" textStyle={textStyle}>
						Unlock Your Full Investment Potential
					</Text>
					</Box>
              	</motion.div>
              
				<motion.div 
					initial={{ opacity: 0, scale: 0.9 }} 
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 1, duration: 0.7 }}
				>
				<Box 
					p={5} 
					bg="yellow.500" 
					color="white" 
					borderRadius="md" 
					display="flex" 
					alignItems="center" 
					boxShadow="xl"
					_hover={{ scale: 1.02 }}
					transition="scale 0.2s ease-in-out"
				>
					<LogIn size={32} className="mr-4" />
					<Text fontWeight="bold" textStyle={textStyle}>
					Targeted Strategies for Consistent Growth
					</Text>
				</Box>
				</motion.div>
            </VStack>
			<HStack
				mt={14}
				py={[4, 8, 8]}
				px={1}
				w="100%"
				maxW="100vw"
				display="flex"
				flexDirection="column"
				alignItems="center"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
				>
					<Heading fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }} mb={8} color="gray.emphasized">
						Top Trading Stocks
					</Heading>
				</motion.div>
				<Flex flexWrap="wrap" gap={6} justifyContent="center">
					{stocks.map((stock, index) => (
						<StockCards
							key={stock.name}
							stockName={stock.name}
							company={stock.company}
							price={stock.price}
							change={stock.change}
							volume={stock.volume}
							textColor={textColor}
						/>
					))}
				</Flex>
			</HStack>
			</VStack>
        </Flex>
      </Box>
    );
  }
  

export default LeftPane;