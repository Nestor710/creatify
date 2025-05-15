"use client"
import Header from "@/components/shared/Header"
import SocialsFormat, { Social, SocialId } from "@/components/shared/SocialsFormat"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { defaultValues } from "@/constants"
import { z } from "zod"
import CloudinaryVideoCropper from "@/components/shared/VideoCropper"

export const formSchema = z.object({
  title: z.string(),
  aspectRatio: z.string().optional(),
  color: z.string().optional(),
  prompt: z.string().optional(),
  publicId: z.string()
})


const PageVideoCrop = () => {
  return (
    <>
      <Header title="Video Crop" subtitle="Crop videos to your desired dimensions"/>
      <section className="mt-10 flex flex-col">
        {/* <span className="text-dark-600 text-xl font-semibold mb-3">Choose a aspect ratio:</span>
        <div className="justify-start flex flex-row gap-x-5">
          {socials.map((social) => (
            <div key={social.id}>
              <SocialsFormat 
                social={social} 
                isSelected={selectedSocialId === social.id} 
                onClick={() => handleSocialClick(social.id)} 
              />
            </div>
          ))}
        </div> */}
        <div>
          <CloudinaryVideoCropper />
        </div>
      </section>
    </>
  )
}

export default PageVideoCrop