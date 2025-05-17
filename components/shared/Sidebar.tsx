import { UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import NavList from "./NavList"
import { navLinksNew, profileLinks } from "@/constants"

const Sidebar = () => {

    return (
        <aside className="sidebar">
            <div className="flex size-full flex-col gap-4">
                <Link href="/" className="sidebar-logo">
                    <Image src="/logo-icon.png" alt="logo" className="w-auto h-auto mr-2" width={180} height={28}/>
                    <h1 className="text-4xl font-bold text-gradient">Creatify</h1>  
                </Link>

                <nav className="sidebar-nav">
                    <ul className="sidebar-nav_elements">
                        <NavList navLinks={navLinksNew} />
                    </ul>
                    <ul className="sidebar-nav_elements">
                        <NavList navLinks={profileLinks} />
                        <li className="flex-center cursor-pointer gap-2 p-4">
                            <UserButton
                                afterSignOutUrl="/" 
                                showName
                            />
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}

export default Sidebar