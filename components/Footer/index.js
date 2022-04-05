import FacebookIcon from '@icons/facebook.svg'
import InstagramIcon from '@icons/instagram.svg'

export default function Footer() {
   return (
      <footer className="h-32 bg-slate-800 text-white flex justify-center">
         <div className="w-fit md:w-full h-full px-10 flex flex-col md:flex-row justify-around md:justify-between items-start md:items-center">
            <div className="flex space-x-4">
               <span>Email:</span>
               <a
                  className="hover:cursor-pointer"
                  href={`mailto:christinyoung1@gmail.com?subject=${encodeURI(
                     'Signup Info'
                  )}`}
               >
                  christinyoung1@gmail.com
               </a>
            </div>
            <div className="flex space-x-4">
               <span>Phone:</span>
               <span>(479)-202-2386</span>
            </div>
            <div className="flex space-x-4">
               <span className="mt-1">Follow Us:</span>
               <div className="flex space-x-2">
                  <a
                     target="_blank"
                     rel="noopenner noreferrer"
                     href="https://www.facebook.com/youngs.portraits"
                  >
                     <FacebookIcon />
                  </a>
                  <a
                     target="_blank"
                     rel="noopenner noreferrer"
                     href="https://www.instagram.com/da_coach007"
                  >
                     <InstagramIcon />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
