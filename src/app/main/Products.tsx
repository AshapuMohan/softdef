"use client";

import React, { useState, useMemo } from "react";
import shoes from "./shoes.json";
import Image from "next/image";
import { Star, Heart, ShoppingCart } from "lucide-react";

interface ProductsProps {
  filters: {
    categories: string[];
    brands: string[];
    colors: string[];
    priceRange: number[];
    discount: string[];
  };
  sortBy: string;
  itemsPerPage: number;
  viewMode: string;
}

const Products = ({ filters, sortBy, itemsPerPage, viewMode }: ProductsProps) => {
  const [page, setPage] = useState(1);
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = [...shoes];

    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(product => 
        filters.brands.includes(product.brand)
      );
    }

    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.colors.some(color => 
          filters.colors.some(filterColor => 
            color.toLowerCase().includes(filterColor.toLowerCase())
          )
        )
      );
    }

    if (filters.priceRange[1] < 20000) {
      filtered = filtered.filter(product => 
        product.price <= filters.priceRange[1]
      );
    }

    if (filters.discount.length > 0) {
      filtered = filtered.filter(product => 
        filters.discount.some(discount => 
          product.discountPercent >= parseInt(discount)
        )
      );
    }
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price_low_high":
          return a.price - b.price;
        case "price_high_low":
          return b.price - a.price;
        case "rating":
          return b.ratingValue - a.ratingValue;
        case "popularity":
          return b.ratingCount - a.ratingCount;
        case "name":
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return filtered;
  }, [filters, sortBy]);

  const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
  const start = (page - 1) * itemsPerPage;
  const paginatedProducts = filteredAndSortedProducts.slice(start, start + itemsPerPage);

  const ProductCard = ({ shoe }: { shoe: typeof shoes[0] }) => {
    const cardBgColor = 'bg-white';

    return (
      <div className={`${cardBgColor} border border-gray-200 rounded-lg p-3 sm:p-4 hover:shadow-lg transition-all duration-300 group relative`}>
        {shoe.isHot && (
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium z-10">
            HOT
          </span>
        )}
        
        <div className="relative overflow-hidden rounded-lg mb-4">
          <Image
            src={shoe.imageUrl}
            alt={shoe.name}
            width={300}
            height={200}
            className="w-full h-32 sm:h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 mb-2" suppressHydrationWarning>
              <Heart size={16} className="text-gray-600" />
            </button>
          </div>
        </div>

        <h3 className="text-xs sm:text-sm font-semibold mb-2 text-gray-800 line-clamp-2">
          {shoe.name}
        </h3>
        
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                size={12} 
                className={`${i < Math.floor(shoe.ratingValue) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-500 ml-2">({shoe.ratingCount})</span>
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-gray-900">₹{shoe.price.toLocaleString()}</span>
            <span className="text-sm text-gray-500 line-through">₹{shoe.discountPrice.toLocaleString()}</span>
          </div>
          <span className="text-sm font-medium text-green-600">{shoe.discountPercent}% off</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex space-x-1">
            {shoe.colors.slice(0, 3).map((color, index) => (
              <div
                key={index}
                className="w-4 h-4 rounded-full border border-gray-300"
                style={{ backgroundColor: getColorHex(color) }}
                title={color}
              />
            ))}
            {shoe.colors.length > 3 && (
              <span className="text-xs text-gray-500">+{shoe.colors.length - 3}</span>
            )}
          </div>
          <button className="bg-blue-600 text-white px-3 py-1 rounded-md text-sm hover:bg-blue-700 transition-colors flex items-center space-x-1" suppressHydrationWarning>
            <ShoppingCart size={14} />
            <span>Add</span>
          </button>
        </div>
      </div>
    );
  };

  const getColorHex = (colorName: string): string => {
    const colorMap: { [key: string]: string } = {
      'black': '#000000',
      'white': '#FFFFFF',
      'red': '#FF0000',
      'blue': '#0000FF',
      'green': '#00FF00',
      'yellow': '#FFFF00',
      'orange': '#FFA500',
      'purple': '#800080',
      'gray': '#808080',
      'grey': '#808080',
      'navy': '#000080',
      'brown': '#A52A2A'
    };
    
    const lowerColor = colorName.toLowerCase();
    for (const [key, value] of Object.entries(colorMap)) {
      if (lowerColor.includes(key)) {
        return value;
      }
    }
    return '#CCCCCC';
  };

  if (filteredAndSortedProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-400 mb-4">
          <ShoppingCart size={48} className="mx-auto" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
        <p className="text-gray-500">Try adjusting your filters to see more results.</p>
      </div>
    );
  }

  return (
    <div>
      <div className={`grid gap-3 sm:gap-4 lg:gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4'
          : 'grid-cols-1'
      }`}>
        {paginatedProducts.map((shoe) => (
          <ProductCard key={shoe.id} shoe={shoe} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-8 space-x-2">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            suppressHydrationWarning
          >
            Previous
          </button>
          
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const pageNum = i + 1;
            return (
              <button
                key={pageNum}
                onClick={() => setPage(pageNum)}
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  page === pageNum
                    ? 'bg-blue-600 text-white'
                    : 'border border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                }`}
                suppressHydrationWarning
              >
                {pageNum}
              </button>
            );
          })}
          
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-3 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            suppressHydrationWarning
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
