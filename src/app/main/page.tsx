"use client";
import React, { useState } from "react";
import { Filter } from "lucide-react";
import LeftBody from "./Leftbody";
import RightBody from "./Rightbody";
import MobileFilterDrawer from "@/components/MobileFilterDrawer";

interface FilterType {
  categories: string[];
  brands: string[];
  colors: string[];
  priceRange: number[];
  discount: string[];
}

export default function Main() {
  const [filters, setFilters] = useState<FilterType>({
    categories: [],
    brands: [],
    colors: [],
    priceRange: [0, 20000],
    discount: []
  });
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const handleFiltersChange = (newFilters: FilterType) => {
    setFilters(newFilters);
  };

  return (
    <div className="w-full bg-gray-50">
      <div className="lg:hidden p-3 sm:p-4 border-b bg-white">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
          suppressHydrationWarning
        >
          <Filter size={16} />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex min-h-screen">
        <div className="hidden lg:block">
          <LeftBody onFiltersChange={handleFiltersChange} />
        </div>
        
        <RightBody filters={filters} />
      </div>

      <MobileFilterDrawer
        isOpen={isMobileFilterOpen}
        onClose={() => setIsMobileFilterOpen(false)}
        onFiltersChange={handleFiltersChange}
      />
    </div>
  );
}
