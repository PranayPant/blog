export default function Header() {
   const navLinks = [
      {
         path: '#mission-statement',
         text: 'About Us',
      },
      {
         path: '#donate',
         text: 'Support Us',
      },
   ]
   return (
      <header className="w-full flex justify-center absolute top-0 bg-transparent z-50">
         <div className="flex place-items-center w-4/5">
            <h1 className="text-white flex-auto">Young Gunz Boxing</h1>
            <nav className="pt-3">
               <ul className="flex">
                  {navLinks.map(({ path, text }) => (
                     <li>
                        <a className="text-white p-3" href={path}>
                           {text}
                        </a>
                     </li>
                  ))}
               </ul>
            </nav>
         </div>
      </header>
   )
}
