// import { useState, useEffect } from 'react';
// import SearchIcon from "./search.svg"
// const [searchTerm, setSearchTerm] = useState("");
// <div className="search">
//           <input placeholder="Search for movies"
//             value= {searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)} />

//           <img src={SearchIcon} alt="search" onClick={() => (searchTerm)} />
//         </div>


import React from "react";

const Search = () => {

    return(
        <form className="w-80  relative ">
            <div className="relative">
                <input type = "search" placeholder = "Search Here..." className=" w-full h-10 p-4 border-gray-300 border-2 rounded-md text-black"/>
            </div>

            </form>
    )
}

export default Search;