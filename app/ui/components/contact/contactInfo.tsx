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
            direction="column" 
            mt={[0, 0, 0, -36]}
            gap={6}
            color={color}
            justifyContent={{base:"center", lg:"flex-start"}}
            alignItems={{base:"center", lg:"flex-start"}}
            >
                <Heading 
                    textStyle={{base: "2xl", md:"3xl", lg:"4xl"}} 
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
                    <Link href="mailto:Lelleugene49@gmail.com">
                        Lelleugene49@gmail.com
                    </Link>
                </HStack>
                <Text>Connect with me on Socials</Text>
        </Flex>
        <Social colorMode={colorMode}/>
    </motion.div>
)};

export default ContactInfo;
