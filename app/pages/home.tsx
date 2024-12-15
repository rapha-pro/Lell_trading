'use client';

import { motion } from 'motion/react';
import { Box, Flex, Heading, Text, VStack } from '@chakra-ui/react';
import { 
  LineChart, 
  TrendingUp, 
  Target, 
  Award, 
  Globe 
} from 'lucide-react';
import { useColorModeValue } from '@/components/ui/color-mode';

export default function Home() {
  // Define dynamic values for colors
  const bg = useColorModeValue('gray.50', 'gray.subtle');
  const leftPaneTextColor = useColorModeValue('gray.500', 'gray.300');
  const textColor = 'yellow.500';
  const cardBg = 'gray.solid';
  const cardTextColor = 'gray.muted'

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
      <Flex 
        maxW="container.xl" 
        mx="auto" 
        alignItems="center" 
        flexDirection={['column', 'row']}
        gap={12}
      >
        {/* Hero Section */}
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
          <Text fontSize="xl" color={leftPaneTextColor}>
            Transforming market complexity into strategic investment opportunities
          </Text>
          <Flex gap={4}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold"
            >
              View Portfolio
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="border-2 border-yellow-500 text-yellow-500 px-6 py-3 rounded-lg font-bold"
            >
              Contact
            </motion.button>
          </Flex>
        </VStack>

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
              >
                <feature.icon 
                  size={48} 
                  className="mx-auto mb-4" 
                />
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
      </Flex>
    </Box>
  );
}
