'use client';

import Link from 'next/link';
import { AiOutlineHome, AiOutlinePhone } from 'react-icons/ai';
import { FaInfoCircle } from 'react-icons/fa';
import { HiOutlineClipboardList } from 'react-icons/hi';

const navLinks = [
  { label: 'Home', href: '#', icon: <AiOutlineHome /> },
  { label: 'About', href: '#about', icon: <FaInfoCircle /> },
  { label: 'Services', href: '#services', icon: <HiOutlineClipboardList /> },
  { label: 'Contact', href: '#contact', icon: <AiOutlinePhone /> },
];

interface NavItemProps {
    activeTab: string;
    setActiveTab: (label: string) => void;
    onClose?: () => void; // Optional, for mobile drawer support
}

export default function NavItem({ activeTab, setActiveTab, onClose }: NavItemProps) {
  return (
    <>
      {navLinks.map(({ label, href, icon }) => (
        <Link
          key={label}
          href={href}
          onClick={(e) => {
            setActiveTab(label);
            if (onClose) onClose(); 
          }}
          className={`relative flex items-center gap-3 py-2 transition-all ${
            activeTab === label ? 'text-yellow-600' : ''
          } hover:text-yellow-600`}
        >
          <span className="mt-1">{icon}</span>
          {label}
          {activeTab === label && (
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-yellow-500 transition-transform" />
          )}
        </Link>
      ))}
    </>
  );
}
