import Footer from '@components/Footer'
import Header from '@components/Header'

export default function Layout({ children }) {
   return (
      <div className="relative">
         <Header />
         <main>
            <div className="flex flex-col">{children}</div>
         </main>
         <Footer />
      </div>
   )
}
