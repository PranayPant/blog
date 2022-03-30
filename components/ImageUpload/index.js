import { useState } from 'react'

import Dropzone from '@components/Dropzone'

import { readFileAsBlobURL } from '@utils/fileReader'

export default function ImageUpload() {
   const [imageURLs, setImageURLs] = useState(new Set())
   const handleDrop = async (acceptedFiles) => {
      const filePromises = acceptedFiles.map((f) => readFileAsBlobURL(f))
      const fileURLs = await Promise.all(filePromises)
      setImageURLs((prev) => {
         const set = new Set(prev)
         fileURLs.forEach((url) => set.add(url))
         return set
      })
   }
   return (
      <>
         <Dropzone handleDrop={handleDrop} accept="image/*" />
         <div className="w-96 h-96 flex flex-wrap">
            {Array.from(imageURLs).map((src) => (
               <div key={src} className="w-1/2">
                  <img src={src} />
               </div>
            ))}
         </div>
      </>
   )
}
