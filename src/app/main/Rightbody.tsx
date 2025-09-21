"use client";
import { useState } from "react";
import Products from "./Products";
import { Grip, Menu } from "lucide-react";
import Image from "next/image";

interface RightBodyProps {
  filters: {
    categories: string[];
    brands: string[];
    colors: string[];
    priceRange: number[];
    discount: string[];
  };
}

export default function RightBody({ filters }: RightBodyProps) {
  const [sortBy, setSortBy] = useState("name");
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [viewMode, setViewMode] = useState("grid");

  return (
    <div className="flex-1 bg-white p-3 sm:p-4 lg:p-6">
      <div className="w-full h-[200px] sm:h-[250px] lg:h-[300px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl lg:rounded-2xl shadow-lg mb-4 lg:mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between h-full p-4 sm:px-6 lg:px-8">
          <div className="flex-1">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
              Adidas Men&rsquo;s Own The Game 3.0
            </h1>
            <p className="text-gray-600 mb-4 text-lg">
              Performance and design. Taken right to the edge.
            </p>
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium" suppressHydrationWarning>
              Shop Now
            </button>
          </div>
          <div className="flex-1 flex justify-end">
            <Image 
              src="/images/hero-1.png" 
              alt="Adidas Shoe" 
              width={300} 
              height={200} 
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="w-full bg-gray-50 rounded-xl p-3 sm:p-4 mb-4 lg:mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="text-sm text-gray-600">
          24 Items
        </div>
        
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              suppressHydrationWarning
            >
              <option value="name">Name</option>
              <option value="popularity">Popularity</option>
              <option value="rating">Rating</option>
              <option value="price_low_high">Price: Low to High</option>
              <option value="price_high_low">Price: High to Low</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Show:</span>
            <select 
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
              suppressHydrationWarning
            >
              <option value={9}>9</option>
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              suppressHydrationWarning
            >
              <Grip size={16} />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-500 text-white' : 'text-gray-500 hover:text-gray-700'}`}
              suppressHydrationWarning
            >
              <Menu size={16} />
            </button>
          </div>
        </div>
      </div>

      <Products 
        filters={filters}
        sortBy={sortBy}
        itemsPerPage={itemsPerPage}
        viewMode={viewMode}
      />
    </div>
  );
}
