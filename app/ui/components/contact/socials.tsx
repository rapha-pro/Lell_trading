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
        <Flex justify={{base:"center", smToMd: "center", lg:"left"}} gap={4} mt={6}>
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
                p={1.2}
                border="1px solid rgba(205, 205, 255, 0.5)"
                _hover={{
                    border: `1px solid ${btn.hoverColor}`,
                    transition: "padding",
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
            >

                {/* Inner Circle for Icon */}
                <Flex
                    justify="center"
                    align="center"
                    boxSize="2.8rem"
                    borderRadius="full"
                    transition="all 0.3s ease"
                    zIndex={1}
                    bg={bg}
                    _hover={{
                        bg: btn.bgColor,
                        color: btn.hoverColor,
                        transition: "transform, bg",
                        transitionDuration: "slow",
                        transitionTimingFunction: "ease-out",
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
