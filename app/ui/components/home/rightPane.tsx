'use client';

import { motion } from 'motion/react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { featuresData } from '@/app/utils/home/homeCards';


interface RightPaneProps {
    cardBg: string;
    cardTextColor: string;
    cardIconColor: string;
    textColor: string;
    textStyle: TextStyle;
}

interface TextStyle {
    base: string;
    md: string;
    lg: string
}

const RightPane: React.FC<RightPaneProps> = ({
    cardBg,
    cardTextColor,
    cardIconColor,
    textColor,
    textStyle
  }) => {
    
    const cardVariants = {
      initial: { opacity: 0, scale: 0.9 },
      animate: { 
        opacity: 1, 
        scale: 1,
        transition: {
          duration: 0.5,
          type: "spring",
          stiffness: 100
        }
      },
      hover: {
        scale: 1.05,
        rotate: 2,
        transition: { duration: 0.3 }
      }
    };
  
    
  
    return (
      <Box 
        color={textColor} 
        py={[4, 8, 8, 8]}
        px={1}
        minW="45vw"
        display="flex"
		flexDirection="column"
        alignItems={{ smToLgL: 'center', xl: 'flex-start' }}
        justifyContent={{ smToMd: 'center', lg: 'flex-start' }}
      >
        <Heading 
            fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
            mb={4}
            textAlign='center'
            justifyContent='center'
            display={{ smToLgL: "block", xl: "none" }}
            pb={11}
			color="gray.emphasized"
        >
          Our Features
        </Heading>
          {/* Features Cards */}
          <Flex  
            flexWrap="wrap" 
            gap={6} 
            justifyContent="center"
            direction="row"
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{ width: '16em' }}

              >
                <Box 
                  bg={cardBg} 
                  p={6} 
                  borderRadius="xl" 
                  boxShadow="xl"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textStyle={textStyle}
                 
                >
                  <Icon 
                      boxSize={{base: "6", md: "8", lg: "10", xl: "10", "2xl": "11"}}
                      textStyle={textStyle}
                      aria-label={feature.title}
                      mb={5}
                      color={cardIconColor} 
                      _hover={{
                      background: 'transparent', 
                      transform: 'scale(1.1)',
                      transition: 'transform 0.3s ease',
                      }}
                  >
                      <feature.icon/>
                  </Icon>
              
                  <Heading size="md" mb={3} color={cardTextColor}>
                    {feature.title}
                  </Heading>
                  <Text color={cardTextColor}>
                    {feature.description}
                  </Text>
                </Box>
              </motion.div>
            ))}
          </Flex>
      </Box>
    );
}


export default RightPane;
