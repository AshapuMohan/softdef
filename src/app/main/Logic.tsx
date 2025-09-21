"use client";
import { useState, useMemo } from "react";
import shoes from "./shoes.json";
import LeftBody from "./Leftbody";
import RightBody from "./Rightbody";

export default function Logic() {
  const [filters, setFilters] = useState({
    minPrice: 0,
    maxPrice: Math.max(...shoes.map((s) => s.price)),
    brand: null as string | null,
    color: null as string | null,
    discount: 0,
    sortBy: "name",
    itemsPerPage: 9,
  });

  // Apply filters
  const filteredShoes = useMemo(() => {
    let result = [...shoes];

    // Price filter
    result = result.filter(
      (s) => s.price >= filters.minPrice && s.price <= filters.maxPrice
    );

    // Brand filter
    if (filters.brand) {
      result = result.filter(
        (s) => s.brand.toLowerCase() === filters.brand!.toLowerCase()
      );
    }

    // Color filter
    if (filters.color) {
      result = result.filter((s) =>
        s.colors.some(
          (c) => c.toLowerCase() === filters.color!.toLowerCase()
        )
      );
    }

    // Discount filter
    if (filters.discount > 0) {
      result = result.filter((s) => s.discountPercent >= filters.discount);
    }

    // Sorting
    switch (filters.sortBy) {
      case "price_low_high":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price_high_low":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.ratingValue - a.ratingValue);
        break;
      case "popularity":
        result.sort((a, b) => b.ratingCount - a.ratingCount);
        break;
      case "newness":
        result.sort((a, b) => b.id - a.id);
        break;
      default: // name
        result.sort((a, b) => a.name.localeCompare(b.name));
    }

    return result;
  }, [filters]);

  return (
    <div className="flex">
      <LeftBody filters={filters} setFilters={setFilters} />
      <RightBody
        filters={filters}
        setFilters={setFilters}
        products={filteredShoes}
      />
    </div>
  );
}
