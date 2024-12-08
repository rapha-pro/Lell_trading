'use client';

import { useDisclosure, IconButton} from '@chakra-ui/react';
import { useState } from 'react';
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerBody,
  DrawerBackdrop,
} from '@chakra-ui/react';
import { LuChevronDown, LuMenu, LuX } from 'react-icons/lu';
import Link from 'next/link';
import UserLogo from '@/app/ui/logo/UserLogo'
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode';
import NavItem from './navbar_items';

export default function Navbar() {
  const { open, onToggle, onClose } = useDisclosure();
  const { colorMode } = useColorMode();
  const [activeTab, setActiveTab] = useState('Home');
  
  return (
    <div
      className={`min-h-screen transition-colors ${
        colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      {/* Navbar Container */}
      <div
        className={`flex justify-between items-center p-4 shadow-md ${
          colorMode === 'dark'
            ? 'shadow-lg shadow-white/20 bg-gray-900'
            : 'shadow-md bg-white'
        } transition-all relative z-40`}
      >
        {/* left side - Logo */}
        <div className="flex items-center gap-2">
          <Link href="#" shallow={true}>
            <h1 className="text-xl font-bold"><UserLogo /></h1>
          </Link>
        </div>
        
        {/* Navigation center */}
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
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={onToggle}
                className="md:hidden"
              >
                {open ? <LuChevronDown /> : <LuMenu />}
              </IconButton>
            </DrawerTrigger>
            <DrawerBackdrop 
              className="fixed inset-0 bg-black/20 backdrop-blur-[0px] z-30"
            />
            <DrawerContent 
              className={`
				fixed 
				top-16
				right-4 
				w-64 
				h-64 
				${colorMode === 'dark' ? 'bg-gray-800' : 'bg-white'}
				shadow-lg
				rounded-lg
				z-50
				overflow-hidden
				before:content-['']
				before:absolute
				before:top-0
				before:right-0
				before:w-8
				before:h-8
				before:bg-transparent
              `}
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
    </div>
  );
}