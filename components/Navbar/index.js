import Link from 'next/link'

export default function Navbar(){
    return <nav>
    <ul className='flex'>
      <li className='flex-auto text-center'>
        <Link href='/'>Home</Link>
      </li>
      <li className='flex-auto text-center'>
        <Link href='/about-us'>About Us</Link>
      </li>
      <li className='flex-auto text-center'>
        <Link href='/contact-us'>Contact Us</Link>
      </li>
    </ul>
  </nav>
}