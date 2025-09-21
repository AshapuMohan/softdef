"use client";
import React, { useState } from "react";
import { Filter } from "lucide-react";
import LeftBody from "./Leftbody";
import RightBody from "./Rightbody";
import MobileFilterDrawer from "@/components/MobileFilterDrawer";

export default function Main() {
  const [filters, setFilters] = useState({
    categories: [],
    brands: [],
    colors: [],
    priceRange: [0, 20000],
    discount: []
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFiltersChange = (newFilters: any) => {
    setFilters(newFilters);
  };

  return (
    <div className="w-full bg-gray-50">
      {/* Mobile Filter Button */}
      <div className="lg:hidden p-4 border-b bg-white">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <Filter size={16} />
          <span>Filters</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex min-h-screen">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <LeftBody onFiltersChange={handleFiltersChange} />
        </div>
        
        {/* Main Content Area */}
        <RightBody filters={filters} />
      </div>

      {/* Mobile Filter Drawer */}
      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        onFiltersChange={handleFiltersChange}
      />
    </div>
  );
}
