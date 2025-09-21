import Navbar from "@/app/navbar/page";
import Main from "@/app/main/page";
import Footer from "@/app/main/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}
