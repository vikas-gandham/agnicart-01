import React from "react";
import Filters from "./Filters";
import ShowProducts from "./ShowProducts";
import { LiaFilterSolid } from "react-icons/lia";

export default function PLP({ products, filters }) {
  return (
    <div className="w-full lg:w-[80%]  mx-auto px-4 lg:px-0  py-[50px] z-10 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  items-start justify-between gap-10 relative">
        <div className=" md:hidden flex items-center justify-center">
          <button className="border px-6 py-2 border-black rounded-sm flex items-center justify-center">
            <span className=" uppercase">Filters</span>
            <LiaFilterSolid size="1.5rem" />
          </button>
        </div>
        <Filters filters={filters} />
        <ShowProducts products={products} />
      </div>
    </div>
  );
}
