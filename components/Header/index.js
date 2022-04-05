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
      <header className="w-full flex md:flex-row flex-col justify-center absolute top-0 bg-transparent z-50">
         <h1 className="text-white flex-auto">Young Gunz Boxing</h1>
         <nav className="flex place-items-center self-center">
            <ul className="flex md:pt-3 md:pr-3 pr-0 pt-0">
               {navLinks.map(({ path, text }) => (
                  <li className="text-center whitespace-nowrap" key={text}>
                     <a className="text-white p-3" href={path}>
                        {text}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </header>
   )
}
