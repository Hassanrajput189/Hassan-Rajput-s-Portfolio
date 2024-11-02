import Navbar from "./components/Navbar";
import Info from "./components/Info";
import Footer from "./components/Footer";
export default function Home() {
  return (
   <div className="flex flex-col min-h-screen">
    <div>
    <Navbar/>
    </div>
    <div>
    <Info/>
    </div>
    <div className="absolute bottom-0 w-full">
    <Footer/>
    </div>
   </div>
  );
}
