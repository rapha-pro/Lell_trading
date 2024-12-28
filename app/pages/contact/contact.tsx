"use client"

import { Flex, Box, Heading } from "@chakra-ui/react";
import ContactInfo from "@/app/ui/components/contact/contactInfo";
import ContactForm from "@/app/ui/components/contact/contactForm";
import { useColorMode } from "@/components/ui/color-mode";
import clsx from "clsx";


const ContactPage = () => {

    const { colorMode, setColorMode, toggleColorMode } = useColorMode();
    const inputFieldPadding = 4;
	const inputFieldVariant = 'flushed';
	const fieldColor = "customColor.primary-muted";
	const bg=clsx({"gray.50": colorMode === "light", "gray.700": colorMode === "dark"})
    const lightColor="customColor.primary-light-emphasized"
    const color="customColor.primary-emphasized"


    return (
    <Box
        id="contact"
        as="section"
        pt={-8}
        pb={24}
        px={4}
    >
        <Flex
            direction="column"
            gap={{base: 8}}
        >
            <Heading 
                fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }} 
                bgGradient="linear(to-r, yellow.400, yellow.600)" 
                color="customColor.primary-light-emphasized"
                textAlign="center"

            >
                Contact Me
            </Heading>
            <Flex 
                direction={{ base: "column", lg: "row" }} 
                gap={{base: 8, lg:"36"}}
                justify="center"
                align="center" 
            >
                <ContactInfo 
                    lightColor={lightColor}
                    color={color}
                    colorMode={colorMode}
                />
                <ContactForm
                    inputFieldPadding={inputFieldPadding}
                    inputFieldVariant={inputFieldVariant}
                    fieldColor={fieldColor}
                    bg={bg}
                    lightColor={lightColor}
                    color={color}
                    colorMode={colorMode}
                />
            </Flex>
        </Flex>
    </Box>
    );
};

export default ContactPage;
