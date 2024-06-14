"use client"
import { navLinks } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NavList = ({ startSlice, endSlice, isMobile = false }: { startSlice: number, endSlice?: number, isMobile?: boolean }) => {
    const pathname = usePathname()

    const links = !isMobile ? navLinks.slice(startSlice, endSlice) : navLinks;

    return (
        <>
            {links.map((link) => {
                const isActive = link.route === pathname
                return (
                    <li key={link.route} className={`${
                        isMobile 
                        ? `p-18 flex whitespace-nowrap text-dark-700 ${ isActive && 'gradient-text'}` 
                        : `sidebar-nav_element group ${
                            isActive ? 'bg-orange-gradient text-white' : 'text-gray-500'
                        }`
                    } `}>
                        <Link className="sidebar-link cursor-pointer" href={link.route}>
                            <Image 
                                src={link.icon} 
                                alt="logo"
                                width={24}
                                height={24}
                            />
                            {link.label}
                        </Link>
                    </li>
                )
            })}
        </>
    )
}

export default NavList