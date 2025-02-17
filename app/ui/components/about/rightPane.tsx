'use client';

import { Box, VStack, Heading, Text, HStack, Icon } from '@chakra-ui/react';
import { motion } from 'motion/react';
import { aboutCards } from '@/app/utils/about/aboutCards';
import { aboutMeText } from '@/app/utils/about/aboutText';
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  

interface RightPaneProps {
    cardBg: string;
    cardBorder: string;
    highlightColor: string;
    textColor?: string;
    textStyle?: TextStyle;
}

interface TextStyle {
    base: string;
    md: string;
    lg: string
}

export default function RightPane({ cardBg, cardBorder, highlightColor, textColor, textStyle }: RightPaneProps) {
  return (
    <motion.div>
        <VStack
            align="start"
            spaceY={6}
            flex="1"
            textAlign={{ base: 'center', lg: 'left' }}
        >
        <Box>
            <Heading
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
                bgGradient="linear(to-r, yellow.400, yellow.600)" 
                color="customColor.primary-light-emphasized"
                pb={12}
            >
            About Me
            </Heading>
            <Box>
                {aboutMeText.map((text, index) => (
                    <Text
                        key={index}
                        mt={4}
                        textStyle={textStyle}
                        color={textColor}
                        maxW={{ base: '100%', lg: '65%' }}
                    >
                        {text}
                    </Text>
                ))}
            </Box>
        </Box>

        <HStack
            justify="center"
            pt={{lg:18}}
            spaceX={4}
            wrap="wrap"
            gap={4}
            alignSelf={{smToMd: "center"}}
        >
            {aboutCards.map((stat, index) => (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: index * 0.2, scale: "0.3 ease-out" }}
                whileHover={{ scale: 1.02 }}
            >
                <HoverCardRoot openDelay={500} closeDelay={100} unstyled>
                    <HoverCardTrigger
                        key={index}
                        as={motion.div}
                        _hover={{ scale: 1.05 }}
                        bg={cardBg}
                        borderRadius="xl"
                        borderColor={cardBorder}
                        p={2.5}
                        textAlign="center"
                        shadow="md"
                        width="70px"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        outline="none"
                        className="group"
                    >
                        <Icon 
                            boxSize={8} 
                            color="green.500" 
                            mb={2}
                            _groupHover={{animation: "pulse"}}
                            >
                            <stat.icon/>
                        </Icon>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <HoverCardArrow />
                        <Box>
                            <Text fontSize="sm" color={textColor} fontWeight="bold">
                            {stat.title}
                            </Text>
                        </Box>
                    </HoverCardContent>
                </HoverCardRoot>
            </motion.div>
            ))}
        </HStack>
        </VStack>
    </motion.div>
  );
}
