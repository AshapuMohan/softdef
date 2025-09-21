"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import shoes from "./shoes.json";

interface FilterProps {
  onFiltersChange?: (filters: any) => void;
}

export default function LeftBody({ onFiltersChange }: FilterProps) {
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    brands: true,
    colors: true,
    prices: true,
    discount: true
  });

  const [selectedFilters, setSelectedFilters] = useState({
    categories: [] as string[],
    brands: [] as string[],
    colors: [] as string[],
    priceRange: [0, 20000],
    discount: [] as string[]
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleFilterChange = (type: string, value: string | number[]) => {
    const newFilters = { ...selectedFilters };
    
    if (type === 'priceRange') {
      newFilters.priceRange = value as number[];
    } else {
      const filterArray = newFilters[type as keyof typeof selectedFilters] as string[];
      if (typeof value === 'string') {
        const index = filterArray.indexOf(value);
        if (index > -1) {
          filterArray.splice(index, 1);
        } else {
          filterArray.push(value);
        }
      }
    }
    
    setSelectedFilters(newFilters);
    onFiltersChange?.(newFilters);
  };

  const categories = [...new Set(shoes.map(s => s.category).filter(Boolean))];
  const brands = [...new Set(shoes.map(s => s.brand))];
  const colors = [
    { name: 'Red', value: '#FF0000' },
    { name: 'Blue', value: '#0000FF' },
    { name: 'Green', value: '#00FF00' },
    { name: 'Yellow', value: '#FFFF00' },
    { name: 'Orange', value: '#FFA500' },
    { name: 'Purple', value: '#800080' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#FFFFFF' },
    { name: 'Gray', value: '#808080' },
    { name: 'Pink', value: '#FFC0CB' }
  ];

  const FilterSection = ({ title, items, type, isExpanded, onToggle, children }: any) => (
    <div className="bg-gray-50 rounded-lg mb-4">
      <div 
        className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-100 rounded-lg"
        onClick={onToggle}
      >
        <h3 className="font-semibold text-gray-800">{title}</h3>
        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>
      {isExpanded && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="w-80 bg-white p-4 border-r border-gray-200 h-full overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Filters</h2>

      <FilterSection
        title="Categories"
        isExpanded={expandedSections.categories}
        onToggle={() => toggleSection('categories')}
      >
        <div className="space-y-2">
          {categories.slice(0, 6).map((category) => (
            <label key={category} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                checked={selectedFilters.categories.includes(category)}
                onChange={() => handleFilterChange('categories', category)}
              />
              <span className="text-sm text-gray-700 capitalize">{category}</span>
              <span className="text-xs text-gray-500 ml-auto">
                ({shoes.filter(s => s.category === category).length})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
      <FilterSection
        title="Brands"
        isExpanded={expandedSections.brands}
        onToggle={() => toggleSection('brands')}
      >
        <div className="space-y-2">
          {brands.slice(0, 6).map((brand) => (
            <label key={brand} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                checked={selectedFilters.brands.includes(brand)}
                onChange={() => handleFilterChange('brands', brand)}
              />
              <span className="text-sm text-gray-700">{brand}</span>
              <span className="text-xs text-gray-500 ml-auto">
                ({shoes.filter(s => s.brand === brand).length})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
      <FilterSection
        title="Colors"
        isExpanded={expandedSections.colors}
        onToggle={() => toggleSection('colors')}
      >
        <div className="grid grid-cols-5 gap-3">
          {colors.map((color) => (
            <div
              key={color.name}
              className={`w-8 h-8 rounded-full cursor-pointer border-2 transition-all ${
                selectedFilters.colors.includes(color.name)
                  ? 'border-blue-500 scale-110'
                  : 'border-gray-300 hover:border-gray-400'
              }`}
              style={{ backgroundColor: color.value }}
              onClick={() => handleFilterChange('colors', color.name)}
              title={color.name}
            />
          ))}
        </div>
      </FilterSection>
      <FilterSection
        title="Price Range"
        isExpanded={expandedSections.prices}
        onToggle={() => toggleSection('prices')}
      >
        <div className="space-y-4">
          <div className="flex justify-between text-sm text-gray-600">
            <span>₹{selectedFilters.priceRange[0]}</span>
            <span>₹{selectedFilters.priceRange[1]}</span>
          </div>
          <input
            type="range"
            min={0}
            max={20000}
            step={500}
            value={selectedFilters.priceRange[1]}
            onChange={(e) => handleFilterChange('priceRange', [selectedFilters.priceRange[0], Number(e.target.value)])}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </FilterSection>
      <FilterSection
        title="Discount"
        isExpanded={expandedSections.discount}
        onToggle={() => toggleSection('discount')}
      >
        <div className="space-y-2">
          {['10% or more', '20% or more', '30% or more', '40% or more', '50% or more'].map((discount) => (
            <label key={discount} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                className="rounded border-gray-300"
                checked={selectedFilters.discount.includes(discount)}
                onChange={() => handleFilterChange('discount', discount)}
              />
              <span className="text-sm text-gray-700">{discount}</span>
              <span className="text-xs text-gray-500 ml-auto">
                ({shoes.filter(s => s.discountPercent >= parseInt(discount)).length})
              </span>
            </label>
          ))}
        </div>
      </FilterSection>
      <button 
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-4 rounded-lg transition-colors"
        onClick={() => {
          const resetFilters = {
            categories: [],
            brands: [],
            colors: [],
            priceRange: [0, 20000],
            discount: []
          };
          setSelectedFilters(resetFilters);
          onFiltersChange?.(resetFilters);
        }}
      >
        Clear All Filters
      </button>
    </div>
  );
}
