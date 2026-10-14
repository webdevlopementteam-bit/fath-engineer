import Link from "next/link";
import Image from "next/image";
import { Search } from "lucide-react"; // Agar lucide-react icons installed hain

export default function Navbar() {
  return (
    <header className="w-full bg-[#FAE0E0] relative overflow-hidden">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        {/* Left Section / Logo Area with #FAE0E0 background support */}
        <div className="flex items-center bg-[#FAE0E0] py-2 px-4 z-10">
          <div className="w-16 h-16 relative flex items-center justify-center">
            {/* Yahan apna logo image lagayein */}
            <div className="w-14 h-14 bg-red-600 rounded-full flex items-center text-white font-bold text-xl justify-center border-2 border-white shadow-md">
              FW
            </div>
          </div>
        </div>

        {/* Right Slanted Maroon Navbar Section */}
        <div
          className="flex-1 bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white flex items-center justify-between px-8 py-4 shadow-lg"
          style={{
            clipPath: "polygon(3% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-semibold tracking-wide ml-8">
            <Link href="/" className="hover:text-red-200 transition-colors">
              HOME
            </Link>
            <Link
              href="/about"
              className="text-white border-b-2 border-white pb-1"
            >
              ABOUT US
            </Link>
            <Link
              href="/products"
              className="hover:text-red-200 transition-colors"
            >
              PRODUCTS
            </Link>
            <Link
              href="/gallery"
              className="hover:text-red-200 transition-colors"
            >
              GALLERY
            </Link>
            <Link
              href="/export"
              className="hover:text-red-200 transition-colors"
            >
              GLOBAL EXPORT
            </Link>
            <Link
              href="/contact"
              className="hover:text-red-200 transition-colors"
            >
              CONTACT US
            </Link>
            <Link href="/blog" className="hover:text-red-200 transition-colors">
              BLOG
            </Link>
          </nav>

          {/* Search and Enquiry Button */}
          <div className="flex items-center space-x-6">
            <button
              aria-label="Search"
              className="text-white hover:text-red-200 transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              href="/enquiry"
              className="bg-[#FAE0E0] text-red-950 font-bold px-5 py-2 rounded-sm shadow hover:bg-white transition-colors text-sm"
            >
              ENQUIRY NOW
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
