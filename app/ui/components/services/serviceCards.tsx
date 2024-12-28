'use client';

import { motion } from 'motion/react';
import { Box, Heading, Text, VStack, Icon } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { useState} from 'react';
import clsx from 'clsx';

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: IconComponent, title, description, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { colorMode, setColorMode, toggleColorMode } = useColorMode();

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
        bg="bg"
        borderRadius="2xl"
        position="relative"
		shadow={clsx({
			'neumorphismLight': !isHovered,
			'neumorphismInner': isHovered,
		})}
	
      >
        <VStack spaceY={2} align="start">
          <Box p={4} 
			borderRadius="xl" 
			bg={clsx({"gray.50": colorMode === "light", "gray.700": colorMode === "dark"})}
			animation={isHovered ? "pulse" : ""}
		  >
            <Icon 
                boxSize={8} 
                color="customColor.secondary-emphasized" 
            >
                <IconComponent />
            </Icon>
          </Box>
          <Heading size="md" fontWeight="bold" color={useColorModeValue('gray.700', 'white')}>
            {title}
          </Heading>
          <Text color="customColor.primary-emphasized" fontSize="md">
            {description}
          </Text>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default ServiceCard;
