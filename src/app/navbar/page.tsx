"use client";
import Link from "next/link";
import React, { useState } from "react";
import { ShoppingCart, ShoppingBag, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-12 sm:h-14 lg:h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-lg flex items-center justify-center">
              <ShoppingBag size={20} className="sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="text-lg sm:text-xl font-bold text-gray-900">E-comm</span>
          </div>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <Link href="/" className="text-blue-600 font-medium hover:text-blue-700 transition-colors text-sm lg:text-base">
              HOME
            </Link>
            <Link href="/bags" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">
              BAGS
            </Link>
            <Link href="/sneakers" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">
              SNEAKERS
            </Link>
            <Link href="/belt" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">
              BELT
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition-colors text-sm lg:text-base">
              CONTACT
            </Link>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4">
            <button className="flex items-center space-x-1 sm:space-x-2 bg-gray-50 hover:bg-gray-100 px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition-colors" suppressHydrationWarning>
              <ShoppingCart size={16} className="sm:w-5 sm:h-5 text-gray-700" />
              <div className="hidden sm:flex flex-col items-start">
                <span className="text-xs text-gray-500">Cart</span>
                <span className="text-sm font-medium text-gray-900">$0.00</span>
              </div>
              <span className="bg-blue-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                0
              </span>
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              suppressHydrationWarning
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-blue-600 font-medium py-2 text-sm">
                HOME
              </Link>
              <Link href="/bags" className="text-gray-700 py-2 text-sm">
                BAGS
              </Link>
              <Link href="/sneakers" className="text-gray-700 py-2 text-sm">
                SNEAKERS
              </Link>
              <Link href="/belt" className="text-gray-700 py-2 text-sm">
                BELT
              </Link>
              <Link href="/contact" className="text-gray-700 py-2 text-sm">
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}