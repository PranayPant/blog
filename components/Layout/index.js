import Navbar from '@components/Navbar'

export default function Layout({ children }) {
   return (
      <div>
         <main className="h-screen">
            <h1 className="text-center text-6xl font-bold py-10">
               Young Gunz Boxing
            </h1>
            <Navbar />
            <div className="h-full flex flex-col">{children}</div>
         </main>
      </div>
   )
}
