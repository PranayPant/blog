import Head from 'next/head'

import Imgix, { Background } from 'react-imgix'

export default function Home() {
   const teamImgURL = `${process.env.NEXT_PUBLIC_IMGIX_URL}/team.jpg`
   const profileImgURL = `${process.env.NEXT_PUBLIC_IMGIX_URL}/family.jpg`
   const supportLinks = [
      {
         href: '/',
         text: 'Patreon',
      },
      {
         href: '/',
         text: 'PayPal',
      },
      {
         href: '/',
         text: 'GoFundMe',
      },
   ]
   return (
      <>
         <Head>
            <title>Young Gunz Boxing</title>
            <meta
               name="description"
               content="Boxing club dedicated to boxing fundamentals, home of peekaboo boxing"
            />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <section id="hero" className="h-screen">
            <Background
               className="relative h-full w-full flex place-items-center md:place-items-end"
               src={teamImgURL}
               imgixParams={{
                  w: 1920,
                  h: 2000,
                  fit: 'crop',
                  crop: 'entropy',
               }}
            >
               <blockquote className="w-full flex flex-col place-items-center py-10 text-center text-white font-semibold text-3xl leading-loose md:text-5xl md:leading-normal">
                  <span className="w-3/4">
                     “Victorious warriors win first and then go to war, while
                     defeated warriors go to war first and then seek to win.”
                  </span>
                  <br />
                  <span className="relative left-32 md:left-48 lg:left-96">
                     Sun Tzu
                  </span>
               </blockquote>
            </Background>
         </section>
         <section id="mission-statement" className="contain">
            <h2>Our Mission</h2>
            <article className="flex">
               <p className="pr-5 text-2xl text-justify leading-snug">
                  The goal is to develop boys to men, to make champs not just in
                  the ring but outside as well. To provide a home outside of
                  home for those that need it, to guide those who need guidance,
                  and to use boxing as a platform to make that happen.
               </p>
               <aside className="flex flex-col">
                  <Imgix
                     className="rounded"
                     src={profileImgURL}
                     width={500}
                     height={500}
                  />
                  <p className="pt-5 text-justify">
                     My name is Chad E. Young. I am a former pro boxer and
                     currently coach amateur. I&apos;m a man of faith and
                     believe it&apos;s my calling to give back to the youth.
                  </p>
               </aside>
            </article>
         </section>
         <section id="donate" className="contain">
            <h2>Help Us Stay Open</h2>
            <article>
               <p className="text-2xl">
                  I have spent a lot of money trying to keep the gym open.
                  Espescially since COVID, it has been hard to get funding, and
                  prices have shot up through the roof. Many kids who come here
                  cannot afford to buy supplies and we are the only thing
                  keeping them off the streets. Every little bit helps and is
                  truly appreciated.
               </p>
               <ul className="pt-10 flex flex-col place-items-center space-y-3">
                  {supportLinks.map(({ href, text }) => (
                     <li key={text}>
                        <div className="btn-primary w-36 h-10 pt-2">
                           <a
                              href={href}
                              target="_blank"
                              rel="noopener noreferrer"
                           >
                              {text}
                           </a>
                        </div>
                     </li>
                  ))}
               </ul>
            </article>
         </section>
      </>
   )
}
