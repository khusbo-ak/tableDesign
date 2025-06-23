import React from "react";
import { FaSearch } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { IoMdPrint } from "react-icons/io";

const Search = () => {
  return (
    <div className="p-2 flex justify-center gap-2">
      <form className="w-80  relative ">
        <div className="relative">
          <input
            type="search"
            placeholder="Search Here..."
            className=" w-full h-10 p-4 border-gray-300 border-2 rounded-md text-black"/>
        </div>
      </form>
      <button className="flex justify-center p-3 bg-sky-700 text-white rounded-md">
        <FaSearch/>
      </button>
      <button className="flex justify-center p-3 bg-sky-700 text-white rounded-md">
        <IoMdPrint/>
      </button>
    </div>
  );
};

export default Search;
