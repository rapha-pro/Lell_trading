"use client";

import { 
	Box, 
	Button, 
	Flex, 
	VStack, 
	Input, 
	Textarea, 
	Icon 
} from '@chakra-ui/react';
import { Field } from '@/components/ui/field';
import { motion } from 'motion/react';
import { Send } from 'lucide-react';
import { formFields } from '@/app/utils/formFields';
import clsx from 'clsx';
import { useState } from 'react';
import { toaster } from '@/components/ui/toaster';


interface ContactFormProps {
	inputFieldPadding: number;
	inputFieldVariant: string;
	fieldColor: string;
	bg: string;
	lightColor: string;
	color: string;
	colorMode: string;   
}

const ContactForm = ({ 
	inputFieldPadding, 
	inputFieldVariant, 
	fieldColor, 
	bg,
	lightColor,
	color,
	colorMode,
}: ContactFormProps) => {
	const [formData, setFormData] = useState({
        name: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        message: ''
    });
    
	const [errors, setErrors] = useState({
	name: false,
	email: false,
	country: false,
	message: false
	});
    
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prev => ({ ...prev, [name]: value }));
	};

	const validateForm = () => {
	const newErrors = {
		name: !formData.name,
		email: !formData.email,
		country: !formData.country,
		message: !formData.message
	};
	setErrors(newErrors);
	return !Object.values(newErrors).some(err => err);
	};
    
	const handleSubmit = async () => {
	if (validateForm()) {
		try {
			const response = await fetch('api/send', {
				method: 'POST',
				headers: {
				'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});
			
			console.log("IT HAS BEEN SENT ^^^^^^^^^^", response)
			if (response.ok) {
				toaster.create({
					description: 'Thank you! Your message has been sent successfully.',
					type: 'success',
				});
				setFormData({ name: '', lastName: '', email: '', phone: '', country: '', message: '' });
			} else {
				toaster.create({
					description: 'Something went wrong. Please try again later.',
					type: 'error',
				});
			}
		} catch (error) {
			toaster.create({
				description: 'Network error. Please check your connection.',
				type: 'error',
			});
		}
	}
	};
	  

		const borderColor = "blue.100";
		const hoverBorderColor = "blue.200";
		const border = "1px solid";

	return (
      <Box 
		flex={1} 
		p={12} 
		bg="rgba(205, 225, 255, 0.10)"
		m={5}
		borderRadius="lg"
		maxW={{ base: '90vw', lg: '50vw' }}
	  >
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <VStack spaceY={5} align="stretch">
		  	{/* Flex container for Name and Last Name */}
  			<Flex direction={{ base: "column", lg: "row" }} gap={4}>
				{formFields.slice(0, 2).map((field) => (
				<Field
					key={field.name}
					label={field.label}
					color={fieldColor}
					required={field.required}
					invalid={errors[field.name as keyof typeof errors]}
					errorText={clsx({
					[field.required ? `${field.label} is required` : ""]: field.required
					})}
					flex="1" // Ensures equal width when displayed side by side
					minWidth={{ base: "100%", lg: "45%" }}
				>
					{/* Stack first two fields horizontally */}
					{field.textarea ? (
					<Textarea
						placeholder={`${field.label}`}
						name={field.name}
						value={formData[field.name as keyof typeof formData]}
						onChange={handleInputChange}
						variant={inputFieldVariant}
						px={inputFieldPadding}
						borderBottom={border}
						borderColor={borderColor}
						_focus={{
							outline: "none",
						}}
					/>
					) : (
					<Input
						placeholder={clsx({
							[`First ${field.label}`]: field.label === "Name", // Prefix with 'First' if label is 'Name'
							[`${field.label}`]: field.label !== "Name", 
						})}
						name={field.name}
						value={formData[field.name as keyof typeof formData]}
						onChange={handleInputChange}
						// variant={inputFieldVariant}
						px={inputFieldPadding}
						borderBottom={border}
						borderColor={borderColor}
						borderWidth="5"
						borderXWidth="1px"
						_focus={{
							outline: "none",
						}}
					/>
					)}
				</Field>
				))}
			</Flex>

			{/* Other fields (Email, Phone, etc.) will be stacked vertically */}
			{formFields.slice(2).map((field) => (
				<Field
					key={field.name}
					label={field.label}
					color={fieldColor}
					required={field.required}
					invalid={errors[field.name as keyof typeof errors]}
					errorText={clsx({
						[field.required ? `${field.label} is required` : ""]: field.required
					})}
				>
				{field.textarea ? (
					<Textarea
						placeholder={`${field.label}`}
						name={field.name}
						value={formData[field.name as keyof typeof formData]}
						onChange={handleInputChange}
						// variant={inputFieldVariant}
						p={inputFieldPadding}
						borderBottom={border}
						borderColor={borderColor}
						_focus={{
							outline: "none",
						}}
					/>
				) : (
					<Input
						placeholder={`${field.label}`}
						name={field.name}
						value={formData[field.name as keyof typeof formData]}
						onChange={handleInputChange}
						// variant={inputFieldVariant}
						px={inputFieldPadding}
						borderBottom={border}
						borderColor={borderColor}
						_focus={{
							outline: "none",
						}}
					/>
				)}
				</Field>
			))}

			<Button
				onClick={handleSubmit}
				bgColor="customColor.secondary-light"
				w={["90%", "85%", "60%"]}
				alignSelf="center"
				borderRadius="md"
				className="group"
				_hover={{
					bg: "customColor.secondary",
				}}
			>
				<Icon
					name="send-icon"
					cursor="pointer"
					_groupHover={{
						transform: "translateX(-50%) rotate(45deg)",
						transition:"transform",
						transitionDuration:"slow",
						transitionTimingFunction:"ease-in-out",
					}}
				>
					<Send />
				</Icon>	
				Send Message
			</Button>
          </VStack>
        </motion.div>
      </Box>
  );
};

export default ContactForm;
