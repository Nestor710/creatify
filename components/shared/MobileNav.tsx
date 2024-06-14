"use client"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"
import { navLinks } from "@/constants"
import { usePathname } from "next/navigation"
  

const MobileNav = () => {
    const pathname = usePathname()

    return (
        <header className="header">
            <Link href="/" className="flex items-center gap-2 md:py-2">
                <Image src="/logo-icon.png" alt="logo" width={25} height={25}/>
                <h1 className="text-2xl font-semibold text-gradient">Creatify AI</h1> 
            </Link>
            <nav className="flex gap-2">
                <SignedIn>
                    <UserButton afterSignOutUrl="/"/>
                    <Sheet>
                        <SheetTrigger>
                            <Image 
                                src="/assets/icons/menu.svg"
                                alt="menu"
                                width={32}
                                height={32}
                                className="cursor-pointer"
                                />
                        </SheetTrigger>
                        <SheetContent className="sheet-content sm:w-64">
                            <>
                                <div className="flex flex-row gap-2">
                                    <Image src="/logo-icon.png" alt="logo" width={30} height={10}/>
                                    <h1 className="text-2xl font-semibold text-gradient">Creatify AI</h1> 
                                </div>
                                <ul className="header-nav_elements">
                                    {navLinks.map((link) => {
                                    const isActive = link.route === pathname
                                    return (
                                        <li key={link.route} className={`p-18 flex whitespace-nowrap text-dark-700 ${ isActive && 'gradient-text'}`}>
                                            <SheetClose asChild>
                                                <Link className="sidebar-link cursor-pointer" href={link.route}>
                                                    <Image 
                                                        src={link.icon} 
                                                        alt="logo"
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {link.label}
                                                </Link>
                                            </SheetClose>
                                        </li>
                                    )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>
                </SignedIn>
                <SignedOut>
                    <Button asChild className="button bg-orange-gradient bg-cover">
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav