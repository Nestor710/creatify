"use client"
import { profileLinks } from "@/constants"
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

interface SubLink {
  label: string;
  route: string;
  icon: string;
}

interface NavLink {
  label: string;
  route?: string; 
  icon: string;
  subLinks?: SubLink[];
}

interface OpenLinksState {
  [key: string]: boolean;
}

interface NavListProps {
  isMobile?: boolean;
  navLinks: NavLink[];
}


const NavList = ({ isMobile = false, navLinks }: NavListProps) => {
    const pathname = usePathname()
    const [openLinks, setOpenLinks] = useState<OpenLinksState>({})
    const [openSubLinks, setOpenSubLinks] = useState<string | null>(null)

    const links = !isMobile ? navLinks : navLinks.concat(profileLinks);

    const toggleSection = (label: string): void => {
        setOpenLinks(prev => ({
            ...prev,
            [label]: !prev[label]
        }))
    }

    const toggleSubSection = (label: string): void => {
        setOpenSubLinks(prev => prev === label ? null : label)
    }

    return (
        <>
            {links.map((link:NavLink) => {
                const isActive = link.route === pathname
                return (
                    <li key={link.label} className={`${
                        isMobile 
                        ? `p-18 flex whitespace-nowrap text-dark-700 ${ isActive && 'gradient-text'}` 
                        : `rounded-full group ${
                            isActive ? 'bg-orange-gradient text-white' : 'text-gray-500'
                        }`
                    } `}>
                        {
                            !link.subLinks ? (
                                <Link className="sidebar-link cursor-pointer hover:text-gradient" href={link.route || '#'}>
                                    <Image 
                                        src={link.icon} 
                                        alt="logo"
                                        width={24}
                                        height={24}
                                    />
                                    {link.label}
                                </Link>
                            ) : (
                                <div className="">
                                    <button 
                                        className="sidebar-link cursor-pointer hover:text-orange-500 transition-colors duration-300 flex items-center" 
                                        onClick={() => toggleSection(link.label)}
                                    >
                                        <Image 
                                            src={link.icon} 
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {link.label}
                                        {openLinks[link.label] ? (
                                            <ChevronDownIcon className="h-5 w-5 z-10" />
                                        ) : (
                                            <ChevronUpIcon className="h-5 w-5 z-10" />
                                        )}
                                    </button>
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openLinks[link.label] ? 'max-h-0 opacity-0' : 'max-h-96 opacity-100'}`}>
                                        <ul className="ml-5">
                                            {link.subLinks.map((subLink:SubLink) => {
                                                const isActive = subLink.route === pathname
                                                return (
                                                    <li key={subLink.label} className={`${
                                                        isMobile 
                                                        ? `p-18 flex whitespace-nowrap text-dark-700 ${ isActive && 'gradient-text'}` 
                                                        : `sidebar-nav_element group ${
                                                            isActive ? 'bg-orange-gradient text-white' : 'text-gray-500'
                                                        }`
                                                    } `}>
                                                        <Link className="sidebar-link cursor-pointer" href={subLink.route}>
                                                            <Image 
                                                                src={subLink.icon} 
                                                                alt="logo"
                                                                width={24}
                                                                height={24}
                                                            />
                                                            {subLink.label}
                                                        </Link>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                        
                                    </div>
                                </div>
                            )
                        }
                    </li>
                )
            })}
        </>
    )
}

export default NavList