"use client"

import Header from "@/components/shared/Header"
import CloudinaryVideoCropper from "@/components/shared/VideoCropper"

const PageVideoCrop = () => {
  return (
    <>
      <Header title="Video Crop" subtitle="Crop videos to your desired dimensions"/>
      <section className="mt-10 flex flex-col">
        <CloudinaryVideoCropper />
      </section>
    </>
  )
}

export default PageVideoCrop