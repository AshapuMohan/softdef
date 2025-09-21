"use client";
import { X } from "lucide-react";
import LeftBody from "@/app/main/Leftbody";

interface FilterType {
  categories: string[];
  brands: string[];
  colors: string[];
  priceRange: number[];
  discount: string[];
}

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onFiltersChange: (filters: FilterType) => void;
}

export default function MobileFilterDrawer({ isOpen, onClose, onFiltersChange }: MobileFilterDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onClose}
      />
      
      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-full max-w-xs sm:max-w-sm bg-white shadow-xl transform transition-transform">
        <div className="flex items-center justify-between p-3 sm:p-4 border-b">
          <h2 className="text-base sm:text-lg font-semibold">Filters</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        <div className="h-full overflow-y-auto">
          <LeftBody onFiltersChange={onFiltersChange} />
        </div>
      </div>
    </div>
  );
}