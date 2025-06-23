"use client";
import Image from "next/image";
import Search from "./components/table/search";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Home() {
  const [foodData, setData] = useState([]);
  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(foodData);
  return (
    <div className="flex flex-col items-end min-h-screen bg-gray-100">
      <div className="p-4 ">
        <Search />
      </div>
      {/* <div className="w-full flex justify-center"> */}
        <table className="table-auto">
          <thead>
            <tr className="h-10  text-blue-400">
              <th className="w-60 text-start "> Name</th>
              <th className="w-60 text-start"> Address</th>
              <th className="w-60 text-start"> Postcode</th>
              <th className="w-60 text-start"> Rating</th>
              <th className="w-60 text-start"> Type of food</th>
              <th className="w-60 text-start  text-black "> Action</th>
            </tr>
          </thead>
          <tbody className="content-center">
            {foodData.map((data) => (
              <tr
                key={data.id}
                className="border-t-2 h-10 border-gray-300 bg-gray-200 text-black w-60"
              >
                <td className="text-start">{data.Name}</td>
                <td className="text-start"> {data.Address}</td>
                <td className="text-start">{data.PostCode}</td>
                <td className="text-start"> {data.Rating}</td>
                <td className="text-start">{data.TypeOfFood}</td>
                <td className="p-2 flex justify-start gap-2">
                  <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md">
                    <FiEdit />
                  </button>
                  <button className="flex justify-center p-2 bg-red-600 text-white rounded-md">
                    <FaRegTrashAlt />
                  </button>{" "}
                </td>
              </tr>
            ))}
            ;
            {/* <tr className="border-t-2 h-10 border-gray-300 bg-gray-200 text-black w-60 ">
              <td className="text-start"> CN Chinese </td>
              <td className="text-start"> 228 City Road</td>
              <td className="text-start"> 3JH</td>
              <td className="text-start"> 5</td>
              <td className="text-start"> Chinese</td>
              <td className="p-2 flex justify-start gap-2">
                <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md">
                  <FiEdit />
                </button>
                <button className="flex justify-center p-2 bg-red-600 text-white rounded-md">
                  <FaRegTrashAlt />
                </button>{" "}
              </td>
            </tr> */}
            {/* <tr className=" w-60 border-t-2 h-10 border-gray-300 text-black">
              <td className="text-start">007 Takeaway </td>
              <td className="text-start">6 Drummond Street </td>
              <td className="text-start">1HY </td>
              <td className="text-start">6 </td>
              <td className="text-start"> Pizza </td>
              <td className="p-2 flex justify-start gap-2">
                <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md"><FiEdit/></button>
                <button className="flex justify-center p-2 bg-red-600 text-white rounded-md"><FaRegTrashAlt/></button></td>
            </tr>
            <tr className="w-60 border-t-2 h-10 border-gray-300 bg-gray-200 text-black">
              <td className="text-start">042 Restaurant & Bar </td>
              <td className="text-start"> 885 High Road </td>
              <td className="text-start"> 1HR</td>
              <td className="text-start"> 32</td>
              <td className="text-start"> African</td>
              <td className="p-2 flex justify-start gap-2">
                <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md"><FiEdit/></button>
                <button className="flex justify-center p-2 bg-red-600 text-white rounded-md"><FaRegTrashAlt/></button></td>
            </tr>
            <tr className="w-60 border-t-2 h-10 border-gray-300 text-black">
              <td className="text-start">042 Restaurant & Bar </td>
              <td className="text-start"> 885 High Road </td>
              <td className="text-start"> 1HR</td>
              <td className="text-start"> 32</td>
              <td className="text-start"> African</td>
              <td className="p-2 flex justify-start gap-2">
                <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md"><FiEdit/></button>
                <button className="flex justify-center p-2 bg-red-600 text-white rounded-md"><FaRegTrashAlt/></button>
              </td>
            </tr>
            <tr className="w-60 border-t-2 h-10 border-gray-300 bg-gray-200 text-black">
              <td className="text-start">042 Restaurant & Bar </td>
              <td className="text-start"> 885 High Road </td>
              <td className="text-start"> 1HR</td>
              <td className="text-start"> 32</td>
              <td className="text-start"> African</td>
              <td className="p-2 flex justify-start gap-2">
                <button className="flex justify-center p-2 bg-sky-700 text-white rounded-md"><FiEdit/></button>
                <button className="flex justify-center p-2 bg-red-600 text-white rounded-md"><FaRegTrashAlt/></button></td>
            </tr> */}
          </tbody>
        </table>
      {/* </div> */}
    </div>
  );
}
