"use client"
import { profileLinks } from "@/constants"
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

    const links = !isMobile ? navLinks : navLinks.concat(profileLinks);

    const toggleSection = (label: string): void => {
        setOpenLinks(prev => ({
            ...prev,
            [label]: !prev[label]
        }))
    }

    return (
        <>
            {links.map((link:NavLink) => {
                const isActive = link.route === pathname
                return (
                    <li key={link.route} className={`${
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
                                        className="sidebar-link cursor-pointer hover:text-gradient" 
                                        onClick={() => toggleSection(link.label)}
                                    >
                                        <Image 
                                            src={link.icon} 
                                            alt="logo"
                                            width={24}
                                            height={24}
                                        />
                                        {link.label}
                                    </button>
                                    {
                                        !openLinks[link.label] && (
                                            <ul key={link.route} className="ml-5">
                                                {link.subLinks.map((subLink:SubLink) => {
                                                    const isActive = subLink.route === pathname
                                                    return (
                                                        <li key={subLink.route} className={`${
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
                                        )
                                    }
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