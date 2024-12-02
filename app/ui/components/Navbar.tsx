'use client';

import { Button, useDisclosure } from '@chakra-ui/react';
import { IconButton } from '@chakra-ui/react';
import { LuMenu } from 'react-icons/lu'; 
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai'; 
import { FaMoon, FaSun, FaInfoCircle } from 'react-icons/fa'; 
import { LuCheckSquare, LuFolder, LuUser } from "react-icons/lu"
import { HiOutlineClipboardList } from "react-icons/hi";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import UserLogo from '../logo/UserLogo';
import { Tabs } from "@chakra-ui/react"
import { ColorModeButton } from '@/components/ui/color-mode';


export default function Navbar() {
/**
 * Navbar component for the application.
 * 
 * This component renders a responsive navigation bar with a logo, navigation links,
 * and theme toggle buttons. It uses Chakra UI components and Next.js routing.
 * 
 * @returns {JSX.Element} The rendered Navbar component.
*/

    const { open, onToggle } = useDisclosure();
    const pathname = usePathname();

    return (
        <Tabs.Root 
            defaultValue="members" 
            variant="line"
            colorPalette="blue"
            className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-900"
        >
            {/* Logo */}
            <div className="flex items-center gap-2">
                <Link href="/">
                <h1 className="text-xl font-bold text-gray-800 dark:text-white"><UserLogo /></h1>
                </Link>
            </div>
            <Tabs.List bg="bg.muted" rounded="l3" p="3"className='flex gap-12 hidden md:flex'>
                <Tabs.Trigger value="members">
                    <Link
                        href="/"
                        className={`text-gray-800 dark:text-whiten flex gap-2 ${pathname === '/' ? 'text-blue-500' : ''}`}
                    >
                    <AiOutlineHome className='mt-1' />
                    Home
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="projects">
                    <Link
                        href="/about"
                        className={`text-gray-800 dark:text-white flex gap-2 ${pathname === '/about' ? 'text-blue-600' : ''}`}
                    >
                    <FaInfoCircle className='mt-1'/>
                    About
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="tasks">
                    <Link
                    href="/services"
                    className={`text-gray-800 dark:text-white flex gap-2 ${pathname === '/services' ? 'text-blue-600' : ''}`}
                    >
                    <HiOutlineClipboardList className='mt-1'/>
                    Services
                    </Link>
                </Tabs.Trigger>
                <Tabs.Trigger value="tasks">
                    <Link
                    href="/contact"
                    className={`text-gray-800 dark:text-white flex gap-2 ${pathname === '/contact' ? 'text-blue-600' : ''}`}
                    >
                    <AiOutlinePhone className='mt-1'/>
                    Contact
                    </Link>
                </Tabs.Trigger>
            </Tabs.List>

            {/* Right-side Icons */}
            <div className="flex items-center gap-4">
                {/* Dark Mode Toggle */}
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
        </Tabs.Root>
    );
    }

