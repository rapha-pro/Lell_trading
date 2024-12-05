'use client';

import { useDisclosure, IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { LuMenu } from 'react-icons/lu';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import Link from 'next/link';
import UserLogo from '../logo/UserLogo';
import { ColorModeButton, useColorMode } from '@/components/ui/color-mode';

export default function Navbar() {
  const { onToggle } = useDisclosure();
  const { colorMode } = useColorMode();

  const [activeTab, setActiveTab] = useState('Home');

  const navItems = [
    { label: 'Home', href: '#', icon: <AiOutlineHome /> },
    { label: 'About', href: '#about', icon: <FaInfoCircle /> },
    { label: 'Services', href: '#services', icon: <HiOutlineClipboardList /> },
    { label: 'Contact', href: '#contact', icon: <AiOutlinePhone /> },
  ];

  return (
    <div
      className={`min-h-screen transition-colors ${
        colorMode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
      }`}
    >
      <div
        className={`flex justify-between items-center p-4 shadow-md ${
          colorMode === 'dark'
            ? 'shadow-lg shadow-white/20 bg-gray-900'
            : 'shadow-md bg-white'
        } transition-all`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="#" shallow={true}>
            <h1 className="text-xl font-bold"><UserLogo /></h1>
          </Link>
        </div>

        {/* Center Navigation Links */}
        <div className="flex gap-12 hidden md:flex">
          {navItems.map(({ label, href, icon }) => (
            <Link
              key={label} 
              href={href}
              onClick={(e) => {
                setActiveTab(label);
              }}
              className={`relative gap-2 px-4 py-2 transition-all ${
                activeTab === label ? 'text-blue-600' : ''
              } hover:text-blue-500`}
            >
              <span className="flex gap-3">
                <span className="mt-1">{icon}</span>
                {label}
              </span>

              {/* nav-item underline */}
              {activeTab === label && (
                <span
                  className="absolute bottom-0 left-0 h-[2px] w-full bg-blue-500 transition-transform"
                />
              )}
            </Link>
          ))}
        </div>

        {/* Right-side Icons */}
        <div className="flex items-center gap-4">
          <ColorModeButton />

          {/* Hamburger Menu for mobile */}
          <IconButton
            aria-label="Open menu"
            onClick={onToggle}
            className="md:hidden"
          >
            <LuMenu />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
