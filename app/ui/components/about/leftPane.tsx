'use client';

import { useColorMode } from '@/components/ui/color-mode';
import { Box, Heading, Text, Image } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

interface LeftPaneProps {
    cardBg: string;
    cardBorder: string;
    highlightColor: string;
    secondaryTextColor?: string;
    textStyle?: TextStyle;
}

interface TextStyle {
    base: string;
    md: string;
    lg: string
}

export default function LeftPane({ cardBg, cardBorder, highlightColor, secondaryTextColor, textStyle }: LeftPaneProps) {
    const { colorMode, setColorMode, toggleColorMode } = useColorMode();

    const [currentImage, setCurrentImage] = useState(0);
    const [transitioning, setTransitioning] = useState(0);
    const images = ['/assets/Lell0.jpg', '/assets/Lell2.jpg', '/assets/Lell3.jpg'];
    const intervalTime = 10000;

    useEffect(() => {
        const interval = setInterval(() => {
      
          setCurrentImage((prev) => (prev + 1) % images.length);
          setTransitioning(0);
          setTimeout(() => {
            setTransitioning(1); // End transition
          }, 2700); // Matches transition duration
        }, intervalTime);
      
        return () => clearInterval(interval);
    }, [transitioning]);


    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 5 }}
            transition={{ 
                duration: 1, 
                type: 'spring', 
                stiffness: 100,
                ease: "ease-in-out"
            }}
        >
            <Box
                as={motion.div}
                _hover={{ scale: 1.02 }}
                bg={cardBg}
                borderRadius="2xl"
                borderColor={cardBorder}
                p={6}
                shadow="lg"
                overflow="hidden"
                maxW={{ base: '100%', lg: '100%' }}
                outline="none"
                bgGradient="linear(to-r, gray.900, gray.800)"
            >
                <Box
                    borderRadius="full"
                    position="relative"
                    overflow="hidden"
                    border="4px solid transparent"   
                    mb={6}
                    mx="auto"
                    width={{ base: '80vw', sm: '60vw', md: '30vw' }}
                    height={{ base: '80vw', sm: '60vw', md: '30vw' }}
                    p={2}
                    zIndex={1}
                    display="flex"
                    alignItems="center"
                    justifyContent="center" 
                    _after={{
                        content: `""`,
                        position: "absolute",
                        inset: "1px",
                        background: "conic-gradient(rgba(244, 114, 182, 0.8) 0deg, rgba(192, 132, 252, 0.8) 80deg, transparent 2deg)",
                        borderRadius: "full",
                        zIndex: -1,
                        animation: "spin",
                        opacity:`${transitioning}`,
                        transition: "opacity 0.3s ease-in-out"
                    }}
                >
                    {/* Rotating Light Effect */}
                    {/* <Box
                        position="absolute"
                        top={0}
                        left={0}
                        width="100%"
                        height="100%"
                        borderRadius="full"
                        opacity={transitioning}
                        zIndex={0}
                        animation="spin"
                        bg="conic-gradient(rgba(244, 114, 182, 0.8) 0deg, rgba(192, 132, 252, 0.8) 80deg, transparent 2deg)"
                        transition="opacity 0.5s ease-in-out"
                    /> */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentImage}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 1.5 }}
                            style={{
                                width: '100%',
                                height: '100%',
                                position: 'relative',
                                zIndex: 1,
                            }}
                        >
                            <Image
                            src={images[currentImage]}
                            alt="profile image"
                            width="99.5%"
                            height="100%"
                            borderRadius="full"
                            position="relative"
                            zIndex={1}
                            objectFit="cover"
                            />
                        </motion.div>
                </AnimatePresence>
            </Box>
            <Heading size="xl" textAlign="center" color={highlightColor} fontWeight="bold">
                Lylie Fx
            </Heading>
            <Text textAlign="center" mt={2} fontSize="sm" color={secondaryTextColor}>
                Macro-Trader
            </Text>
            </Box>
        </motion.div>
  );
}
