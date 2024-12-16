'use client';

import { motion } from 'motion/react';
import { Box, Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { TrendingUp, Target, Award, Globe } from 'lucide-react';


interface rightPaneProps {
    bg: string;
    cardBg: string;
    cardTextColor: string;
    cardIconColor: string;
    textColor: string;
}

const RightPane: React.FC<rightPaneProps> = ({
    bg,
    cardBg,
    cardTextColor,
    cardIconColor,
    textColor
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
  
    const featuresData = [
      {
        icon: TrendingUp,
        title: "Strategic Trading",
        description: "Proven track record of strategic market analysis and successful trades."
      },
      {
        icon: Target,
        title: "Precision Investing",
        description: "Meticulously crafted investment strategies tailored to market dynamics."
      },
      {
        icon: Award,
        title: "Performance Excellence",
        description: "Consistent high-performance results across multiple market conditions."
      },
      {
        icon: Globe,
        title: "Global Market Insight",
        description: "Deep understanding of international market trends and opportunities."
      }
    ];
  
    return (
      <Box 
        bg={bg} 
        minHeight="100vh" 
        color={textColor} 
        pt={20}
        px={6}
      >
  
          {/* Features Cards */}
          <Flex 
            flex={1} 
            flexWrap="wrap" 
            gap={6} 
            justifyContent="center"
          >
            {featuresData.map((feature, index) => (
              <motion.div
                key={feature.title}
                variants={cardVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                style={{ width: '250px' }}
              >
                <Box 
                  bg={cardBg} 
                  p={6} 
                  borderRadius="xl" 
                  boxShadow="xl"
                  textAlign="center"
                  alignContent='center'
                  alignSelf="center'"
                  alignItems="center"
                  boxAlign="center"
                >
                  <Icon 
                      boxSize={11}
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
