import Header from "@/components/shared/Header"
import CloudinaryVideoCropper from "@/components/shared/VideoCropper"
import { auth } from "@clerk/nextjs/server"
import { redirect } from "next/navigation"
import { getUserById } from "@/lib/actions/user.actions"

const CREDIT_FEE = 5

const PageVideoCrop = async () => {
  const { userId } = auth()

  if (!userId) redirect("/sign-in")

  const user = await getUserById(userId)
  return (
    <>
      <Header 
        title="Smart Video Crop" 
        subtitle="Crop videos to your desired dimensions"
        creditFee={CREDIT_FEE}
      />
      <section className="mt-10 flex flex-col">
        <CloudinaryVideoCropper userId={user._id} creditFee={CREDIT_FEE} />
      </section>
    </>
  )
}

export default PageVideoCrop