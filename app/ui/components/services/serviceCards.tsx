'use client';

import { motion } from 'motion/react';
import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { useColorModeValue } from '@/components/ui/color-mode';
import { useState} from 'react';
import clsx from 'clsx';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description, index }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.800');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Box
        p={8}
        bg={bgColor}
        borderRadius="2xl"
        position="relative"
		shadow={clsx({
			'neumorphismLight': !isHovered,
			'neumorphismInner': isHovered,
		})}
	
      >
        <VStack spacing={6} align="start">
          <Box p={4} borderRadius="xl" bg={useColorModeValue('white', 'gray.700')}>
            <Icon 
                boxSize={8} 
                color={useColorModeValue('yellow.500', 'yellow.200')} 
            >
                <IconComponent />
            </Icon>
          </Box>
          <Heading size="md" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>
            {title}
          </Heading>
          <Text color={useColorModeValue('gray.600', 'gray.300')} fontSize="md">
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;
