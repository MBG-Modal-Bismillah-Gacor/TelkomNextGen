import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function home(){
    return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-telkom-red selection:text-white">
          <Navbar />
          <main className="flex-grow">
            
          </main>
          <Footer />
        </div>
    )
}