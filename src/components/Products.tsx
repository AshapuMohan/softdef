// "use client"

import React, { useState } from "react";
import shoes from "../app/main/shoes.json";
import Image from "next/image";
import { Star } from "lucide-react";

const Products = () => {
  const [page, setPage] = useState(1);
  const limit = 9;
  const filteredProducts = [...shoes];

  const totalPages = Math.ceil(filteredProducts.length / limit);
  const start = (page - 1) * limit;
  const end = start + limit;
  const paginatedProducts = filteredProducts.slice(start, end);

  return (
    <div className="mt-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {paginatedProducts.map((shoe) => (
          <div
            key={shoe.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              src={shoe.imageUrl}
              alt={shoe.name}
              width={300}
              height={200}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-sm font-semibold mb-2">{shoe.name}</h2>
            <p className="text-gray-600 mb-2 flex items-center gap-1">
              {shoe.ratingValue} <Star className="text-orange-300 w-4 h-4" />
            </p>
            <div className="flex justify-between items-center">
              <p className="text-blue-500 font-bold">₹{shoe.price}</p>
              <del className="text-gray-600">₹{shoe.discountPrice}</del>
              <p className="text-red-500">{shoe.discountPercent}% off</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pages */}
      <div className="flex justify-center w-full h-[40px] bg-neutral-100 items-center mt-6 gap-2">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded ${
              page === i + 1 ? "bg-blue-500 text-white" : "bg-neutral-100 text-black"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;
