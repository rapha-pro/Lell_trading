"use client"

import { Flex, HStack, Heading, Icon, Link, Text } from "@chakra-ui/react";
import { motion } from "motion/react";
import Social from "./socials";
import { MailCheck } from "lucide-react";

interface ContactInfoProps {
    lightColor: string;
    color: string;
    colorMode: string;
}

const ContactInfo = ({lightColor, color, colorMode}:ContactInfoProps) => {
  return (
    <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Flex 
            flex={1} 
            textAlign={['center', 'left']} 
            p={4}
            minW="30vw"
            display="flex" 
            direction="column" 
            mt={-36}
            gap={5}
            color={color}
            >
                <Heading 
                    textStyle={{base: "xl", md:"2xl", lg:"3xl"}} 
                >
                    Get in Touch
                </Heading>
                <Text mb={2}>Will love to hear from you. Fill out the form to reach out!</Text>
                <HStack gap={1}>
                    <Icon fontWeight="bold">
                        <MailCheck />
                    </Icon>
                    <Text fontWeight="bold">Email:
                    </Text>
                    <Link href="mailto:">
                        contact@email.com
                    </Link>
                </HStack>
                <Text>Connect with me on Socials</Text>
        </Flex>
        <Social colorMode={colorMode}/>
    </motion.div>
)};

export default ContactInfo;
