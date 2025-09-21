import React from "react";
import Image from "next/image";
import { Shirt, Handbag, Footprints, Venus, Star } from "lucide-react";

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col items-center m-5">
      {/* Banner */}
      <div className="w-[500px] h-[300px] bg-[url(/images/nike-1.jpg)] bg-no-repeat rounded shadow px-5 py-3">
        <h1 className="text-3xl font-bold text-black">Super Flash Sale</h1>
        <h1 className="text-2xl font-bold text-black">50% off</h1>
        <div className="flex items-center">
          <button className="bg-black text-white p-1 rounded">08</button> :{" "}
          <button className="bg-black text-white p-1 rounded">34</button> :{" "}
          <button className="bg-black text-white p-1 rounded">52</button>
        </div>
      </div>

      {/* Categories */}
      <div className="w-[500px] h-[50px] pt-5 flex items-center justify-between px-3">
        <h1 className="font-bold">Category</h1>
        <h1 className="font-bold text-blue-500">More Category</h1>
      </div>
      <div className="w-[500px] h-[50px] mt-5 flex items-center justify-between px-3">
        <div className="flex flex-col items-center">
          <button>
            <Shirt className="text-blue-500 w-[50px] h-[50px] shadow p-3 rounded-full" />
          </button>
          <h1>Man Shirt</h1>
        </div>
        <div className="flex flex-col items-center">
          <button>
            <Handbag className="text-blue-500 w-[50px] h-[50px] shadow p-3 rounded-full" />
          </button>
          <h1>Women Bag</h1>
        </div>
        <div className="flex flex-col items-center">
          <button>
            <Footprints className="text-blue-500 w-[50px] h-[50px] shadow p-3 rounded-full" />
          </button>
          <h1>Shoe</h1>
        </div>
        <div className="flex flex-col items-center">
          <button>
            <Venus className="text-blue-500 w-[50px] h-[50px] shadow p-3 rounded-full" />
          </button>
          <h1>Dress</h1>
        </div>
      </div>

      {/* Flash Sale */}
      <div className="w-[500px] h-[50px] mt-5 flex items-center justify-between px-3">
        <h1 className="font-bold">Flash Sale</h1>
        <h1 className="font-bold text-blue-500">See More</h1>
      </div>
      <div className="flex items-center justify-between w-[500px] mt-5 px-3 gap-4 overflow-x-auto">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/adidas-1.jpg"
            alt="Adidas Shoe"
            width={300}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            ADIDAS MEN&apos;S OWN THE GAME 3.0
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            4.8 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹6599</p>
            <del className="text-gray-600">₹7786</del>
            <p className="text-red-500">18% off</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/ua-1.jpg"
            alt="UA Shoe"
            width={300}
            height={200}
            className="w-full h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            UA CURRY 1 LOW FLOTRO LUX
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            4.2 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹8999</p>
            <del className="text-gray-600">₹14999</del>
            <p className="text-red-500">40% off</p>
          </div>
        </div>
      </div>
      {/* Mega Sale */}
      <div className="w-[500px] h-[50px] mt-5 flex items-center justify-between px-3">
        <h1 className="font-bold">Mega Sale</h1>
        <h1 className="font-bold text-blue-500">See More</h1>
      </div>
      <div className="flex items-center justify-between w-[500px] mt-5 px-3 gap-4 overflow-x-auto">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/nike-3.jpg"
            alt="Adidas Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            NIKE G.T. HUSTLE ACADEMY EP BASKETBALL SHOE
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            4.8 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹6796</p>
            <del className="text-gray-600">₹8495</del>
            <p className="text-red-500">20% off</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/j-1.jpg"
            alt="UA Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            JORDAN ZION 3 PF BASKETBALL SHOES
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            5.0 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹8957</p>
            <del className="text-gray-600">₹12795</del>
            <p className="text-red-500">30% off</p>
          </div>
        </div>
      </div>
      {/* Banner-2 */}
      <div className="w-[500px] h-[300px] bg-[url(/images/j-5.jpg)] mt-5 bg-no-repeat rounded shadow px-5 py-3">
        <h1 className="text-3xl font-bold text-black">Recommend Product</h1>
        <h1 className="text-2xl font-bold text-black">We recommend the best for you</h1>
      </div>
      <div className="flex items-center justify-between w-[500px] mt-5 px-3 gap-4 overflow-x-auto">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/nike-5.jpg"
            alt="Adidas Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            NIKE G.T. HUSTLE ACADEMY EP BASKETBALL SHOE
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            4.8 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹6796</p>
            <del className="text-gray-600">₹8495</del>
            <p className="text-red-500">20% off</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/j-3.jpg"
            alt="UA Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            JORDAN ZION 3 PF BASKETBALL SHOES
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            5.0 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹8957</p>
            <del className="text-gray-600">₹12795</del>
            <p className="text-red-500">30% off</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between w-[500px] mt-5 mb-10 px-3 gap-4 overflow-x-auto">
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/nike-9.jpg"
            alt="Adidas Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            NIKE G.T. HUSTLE ACADEMY EP BASKETBALL SHOE
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            4.8 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹6796</p>
            <del className="text-gray-600">₹8495</del>
            <p className="text-red-500">20% off</p>
          </div>
        </div>
        <div className="border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow duration-300">
          <Image
            src="/images/j-2.jpg"
            alt="UA Shoe"
            width={300}
            height={200}
            className="w-[280px] h-48 object-cover mb-4 rounded"
          />
          <h2 className="text-sm font-semibold mb-2">
            JORDAN ZION 3 PF BASKETBALL SHOES
          </h2>
          <p className="text-gray-600 mb-2 flex items-center gap-1">
            5.0 <Star className="text-orange-300 w-4 h-4" />
          </p>
          <div className="flex justify-between items-center">
            <p className="text-blue-500 font-bold">₹8957</p>
            <del className="text-gray-600">₹12795</del>
            <p className="text-red-500">30% off</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
