'use client';

import { motion } from 'motion/react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Target, DollarSign, LogIn } from 'lucide-react';

interface LeftPaneProps {
    bg: string;
    textColor: string;
    textStyle: TextStyle; 
}

interface TextStyle {
    base: string;
    md: string;
    lg: string
}
  
  const LeftPane: React.FC<LeftPaneProps> = ({ bg, textColor, textStyle }) => {
     
    return (
      <Box 
        bg={bg}  
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
                  boxShadow="lg"
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
                  boxShadow="lg"
                >
                  <LogIn size={32} className="mr-4" />
                  <Text fontWeight="bold" textStyle={textStyle}>
                    Targeted Strategies for Consistent Growth
                  </Text>
                </Box>
              </motion.div>
            </VStack>
          </VStack>
        </Flex>
      </Box>
    );
  }
  

export default LeftPane;