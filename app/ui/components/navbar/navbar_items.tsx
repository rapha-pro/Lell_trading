'use client';

import { Link } from '@chakra-ui/react';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import clsx from 'clsx';

const navLinks = [
  { label: 'Home', href: '#', icon: <AiOutlineHome /> },
  { label: 'About', href: '#about', icon: <FaInfoCircle /> },
  { label: 'Services', href: '#services', icon: <HiOutlineClipboardList /> },
  { label: 'Contact', href: '#contact', icon: <AiOutlinePhone /> },
];

interface NavItemProps {
  activeTab: string;
  setActiveTab: (label: string) => void;
  onClose?: () => void; 
}

export default function NavItem({ activeTab, setActiveTab, onClose }: NavItemProps) {
  const { colorMode } = useColorMode();
 
  const linkColor = 'gray.fg';
  const hoverColor = useColorModeValue('yellow.500', 'yellow.400') || 'yellow.500';
  const activeColor = useColorModeValue('yellow.500', 'yellow.400') || 'yellow.500';
  const activeBarColor = useColorModeValue('yellow.500', 'yellow.400') || 'yellow.500';

  return (
    <>
      {navLinks.map(({ label, href, icon }) => (
        <Link
          key={label}
          href={href}
          onClick={() => {
            setActiveTab(label);
            if (onClose) onClose(); 
          }}
          color={activeTab === label ? activeColor : linkColor} 
          className={clsx(
            'relative flex items-center gap-3 py-2 transition-all active:outline-none focus:outline-none',
            'hover:text-yellow.fg' 
          )}
        >
          <span className="mt-1">{icon}</span>
          {label}
          {activeTab === label && (
            <span
              className="absolute bottom-0 left-0 h-[2px] w-full transition-transform"
              style={{ backgroundColor: `var(--chakra-colors-${activeBarColor.replace('.', '-')})` }} // Inline semantic token for active bar
            />
          )}
        </Link>
      ))}
    </>
  );
}
