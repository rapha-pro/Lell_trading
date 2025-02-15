import { Html, Head, Body, Container, Section, Heading, Text } from '@react-email/components';
import React from 'react';

interface EmailTemplateProps {
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  message: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  lastName,
  email,
  phone,
  country,
  message,
}) => {
  return (
    <Html>
      <Head />
      <Body>
        <Container>
          <Section>
            <Heading>New Contact Form Submission</Heading>
            <Text>
              <strong>Name:</strong> {name}
            </Text>
            <Text>
              <strong>Last Name:</strong> {lastName}
            </Text>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Country:</strong> {country}
            </Text>
            <Text>
              <strong>Message:</strong> {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};