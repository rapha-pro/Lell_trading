'use client';

import { Box, Heading, Text, Icon, Image } from '@chakra-ui/react';
import { motion } from 'motion/react';
import { ArrowUp, ArrowDown, TrendingUp } from 'lucide-react';

interface StockCardProps {
  stockName: string;
  company: string;
  price: number;
  change: number;
  volume?: number;
  thumb?: string;
  textColor?: string;
}

interface CryptoProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  thumb: string;
  textColor?: string;
}

const formatVolume = (volume: number): string => {
  if (volume >= 1e9) return `${(volume / 1e9).toFixed(2)}B`;
  if (volume >= 1e6) return `${(volume / 1e6).toFixed(2)}M`;
  if (volume >= 1e3) return `${(volume / 1e3).toFixed(2)}K`;
  return volume.toString();
};

const StockCards: React.FC<CryptoProps> = ({ 
  name, 
  symbol, 
  price, 
  change, 
  volume,
  thumb,
  textColor 
}) => {
  const isIncreasing = change > 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      style={{ width: '16em' }}
    >
      <Box
        p={6}
        borderRadius="xl"
        bg="rgba(205, 205, 255, 0.18)"
        backdropFilter="blur(10px) saturate(120%)"
        border="1px solid rgba(255, 255, 255, 0.2)"
        opacity={0.9}
        color={textColor}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
		{/* Coin Logo Image */}
		<Box>
			{thumb && (
			<Image 
				src={thumb} 
				alt={`${name} logo`} 
				boxSize="50px" 
				borderRadius="full" 
				mb={4}
			/>
			)}
		</Box>
        <Heading size="md" mb={2}>{name}</Heading>
        <Text fontSize="lg" fontWeight="bold">
          {symbol}
          <Icon boxSize={4} ml={2}>
            <TrendingUp />
          </Icon>
        </Text>
        <Text fontSize="xl" mt={4} color={isIncreasing ? 'green.400' : 'red.400'}>
          ${price.toFixed(2)}
          <Icon boxSize={5} ml={2}>
            {isIncreasing ? <ArrowUp /> : <ArrowDown />}
          </Icon>
        </Text>
        {volume && (
          <Text fontSize="sm" mt={2} color="gray.500">
            Vol: {formatVolume(volume)}
          </Text>
        )}
        <Text fontSize="sm" mt={1} color={isIncreasing ? 'green.400' : 'red.400'}>
          {isIncreasing ? '+' : ''}{change.toFixed(2)}%
        </Text>
      </Box>
    </motion.div>
  );
};

export default StockCards;