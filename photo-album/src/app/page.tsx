"use client"
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
import { useState } from 'react';


export type UploadResult ={
  info : {
    public_id : string,
  },
  event : 'success'

}
export default function Home(){
  const [imgId, setImgId] = useState("cld-sample")
  
  return (
    <main className=" bg-black text-white flex min-h-screen flex-col items-center justify-between p-24">
     
    <CldUploadButton
     onUpload={(result:UploadResult) => {
         setImgId(result.info.public_id)
     }}
     uploadPreset="<evpb44gw>" />

   { imgId && (
     <CldImage
      width="400"
      height="300"
      src={imgId}
      sizes="100vw"
      alt="shoes-image"
      />

    )}
    </main>
  
  )
}

