import socialButtons from "@/app/utils/socialButtons";
import { Flex, Icon, Box, Link } from "@chakra-ui/react";
import { useState } from "react";

interface SocialProps {
    colorMode: string;
}

const Social = ({colorMode}: SocialProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const bg = "gray.contrast"

    return (
        <Flex justify={["center", "left"]} gap={4} mt={6}>
        {socialButtons.map((btn, index) => (
            <Link
                key={index}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "none" }}
            >
            {/* Outer Box with mask to hide overflow */}
            <Box
                position="relative"
                borderRadius="full"
                overflow="hidden"
                zIndex={1}
                p={{base:4, smToMd:3, lgL:1}}
                border="1px solid rgba(205, 205, 255, 0.5)"
                _hover={{
                    border: `1px solid ${btn.hoverColor}`,
                    padding: 1.5,
                    transition: "padding",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
            >
                {/* Rotating Light Effect */}
                <Box
                    position="absolute"
                    inset={0}
                    borderRadius="full"
                    zIndex={-1}
                    bgGradient={`conic-gradient(${btn.effectColor} 0deg, transparent 120deg)`} // Custom edge light
                    animation="spin"
                    opacity={hovered === index ? 0.3 : 0}
                    zIndex={-1}
                >
                </Box>

                {/* Inner Circle for Icon */}
                <Flex
                    justify="center"
                    align="center"
                    boxSize={{smToMd: "16vw", lg:"4vw", xl:"3vw"}}
                    borderRadius="full"
                    transition="all 0.3s ease"
                    zIndex={1}
                    bg={bg}
                    _hover={{
                        bg: btn.bgColor,
                        color: btn.hoverColor,
                        transform: "scale(1.05)",
                        transition: "transform, bg",
                        transitionDuration: "slow",
                        transitionTimingFunction: "ease-in-out",
                    }}
                >
                <Icon boxSize={6} >
                    <btn.icon/>
                </Icon>
                </Flex>
            </Box>
            </Link>
        ))}
        </Flex>

  );
};

export default Social;
