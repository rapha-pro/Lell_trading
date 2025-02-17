'use client';

import {
  useDisclosure,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerBody,
  DrawerBackdrop,
} from '@chakra-ui/react';
import { LuChevronDown, LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';
import UserLogo from '@/app/ui/logo/userLogo';
import { ColorModeButton, useColorMode , useColorModeValue } from '@/components/ui/color-mode';
import NavItem from './navbar_items';
import clsx from 'clsx';

export default function Navbar() {
  const { open, onToggle, onClose } = useDisclosure();
  const [activeTab, setActiveTab] = useState('Home');
  const { colorMode, setColorMode } = useColorMode()

  // Define dynamic values for colors and shadows
  const bg = 'gray.subtle';
  const color = 'customColor.primary';
  const shadow = useColorModeValue('shadow-md', 'shadow-lg shadow-white/20') || 'shadow-md';

  useEffect(() => {
    // Read color mode from localStorage on initial load
    const savedColorMode = localStorage.getItem('chakra-ui-color-mode')
    if (savedColorMode) {
      setColorMode(savedColorMode)
    }
  }, [])
  

  return (
    <Box
	    as="nav" 
        position="fixed" 
      top="0" 
      left="0"  
      bg={bg} 
      w="100%" 
      maxW="100vw" 
      color={color}
      zIndex="10"
    >
      {/* Navbar Container */}
      <div
        className={clsx(
          'flex justify-between items-center p-4 transition-all relative z-40',
          shadow 
        )}
      >
        {/* Left side - Logo */}
        <div className="flex items-center gap-2">
          <Link href="#" shallow={true}>
            <h1 className="text-xl font-bold">
            <UserLogo 
              src="/assets/imageLogo.png"
              width={50}
              height={50}
              lightModeColor="gray.500"
              darkModeColor="gray.200"
            />
            </h1>
          </Link>
        </div>

        {/* Navigation Center */}
        <div className="hidden md:flex gap-12">
          <NavItem activeTab={activeTab} setActiveTab={setActiveTab} onClose={onClose} />
        </div>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4 relative">
          <ColorModeButton />

          {/* Drawer for Mobile Navigation */}
          <DrawerRoot open={open} placement="end">
            <DrawerTrigger asChild>
              <IconButton
                aria-label={open ? 'Close menu' : 'Open menu'}
                onClick={onToggle}
                className="md:hidden"
              >
                {open ? <LuChevronDown /> : <LuMenu />}
              </IconButton>
            </DrawerTrigger>
            <DrawerBackdrop className="fixed inset-0 bg-black/20 backdrop-blur-[0px] z-30" />
            <DrawerContent
              color={color}
              className={clsx(
                'fixed top-16 right-4 w-64 h-64 rounded-lg z-50 overflow-hidden',
                'shadow-lg'
              )}
            >
              <IconButton
                onClick={onClose}
                className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center"
              >
                <LuX />
              </IconButton>
              <DrawerBody className="p-4 pt-8">
                <NavItem
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                  onClose={onClose}
                />
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </div>
      </div>
    </Box>
  );
}
