import HeaderContent from "@/components/shared/HeaderContent"
import MobileNav from "@/components/shared/MobileNav"
import Sidebar from "@/components/shared/Sidebar"
import { Toaster } from "@/components/ui/toaster"
import { auth } from "@clerk/nextjs/server"

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  return (
    <main className="root">
      <Sidebar />
      <MobileNav />
      <div className="root-container">
        <HeaderContent userId={userId} />
        <div className="wrapper">
          {children}
        </div>
      </div>
      <Toaster/>
    </main>
  )
}

export default Layout