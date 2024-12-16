'use client';

import { motion } from 'motion/react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { Target, DollarSign } from 'lucide-react';

interface leftPaneProps {
    bg: string;
    textColor: string;
  }
  
  const LeftPane: React.FC<leftPaneProps> = ({ bg, textColor }) => {
     
    return (
      <Box 
        bg={bg} 
        minHeight="100vh" 
        color={textColor} 
        pt={20}
        px={6}
      >
        <Flex 
          maxW="container.xl" 
          mx="auto" 
          alignItems="center" 
          flexDirection={['column', 'row']}
          gap={12}
        >
          {/* Hero Section with Content */}
          <VStack 
            alignItems="flex-start" 
            spacing={9} 
            flex={1} 
            textAlign={['center', 'left']}
          >
            <Heading 
              as="h1" 
              size="3xl" 
              bgGradient="linear(to-r, cyan.400, yellow.500)"
              bgClip="text"
            >
              Market Mastery
            </Heading>
            <Text fontSize="xl" color={textColor}>
              Transforming market complexity into strategic investment opportunities with strategies and precision analysis.
            </Text>
  
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Text fontSize="lg" color={textColor} maxW="600px">
                We combine technology with years experience to offer tailored trading solutions that drive growth. Whether you're a beginner or seasoned investor, we provide insights that can help you thrive in the ever-changing global market.
              </Text>
            </motion.div>

  
            {/* Feature Section with Icon & Text Animation */}
            <VStack 
              spacing={5} 
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
                  <Text fontWeight="bold">
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
                  <Target size={32} className="mr-4" />
                  <Text fontWeight="bold">
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