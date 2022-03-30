import FacebookIcon from '@icons/facebook.svg'
import TwitterIcon from '@icons/twitter.svg'
import InstagramIcon from '@icons/instagram.svg'

export default function Footer() {
   return (
      <footer className="h-32 bg-slate-800 text-white">
         <div className="h-full px-10 flex justify-between items-center">
            <div className="flex flex-col md:flex-row">
               <span className="mr-0 mb-3 md:mr-3 md:mb-0">Contact Us:</span>
               <a>chadyoung@email.com</a>
            </div>
            <div className="flex flex-col md:flex-row">
               <span className="md:mt-1 mt-0 mr-0 mb-3 md:mr-3 md:mb-0">
                  Follow Us:
               </span>
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
                     href="https://www.facebook.com/youngs.portraits"
                  >
                     <TwitterIcon />
                  </a>
                  <a
                     target="_blank"
                     rel="noopenner noreferrer"
                     href="https://www.facebook.com/youngs.portraits"
                  >
                     <InstagramIcon />
                  </a>
               </div>
            </div>
         </div>
      </footer>
   )
}
