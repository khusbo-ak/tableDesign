"use client";
import Image from "next/image";
import Search from "./components/table/search";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdPrint } from "react-icons/io";
import { Button, Checkbox, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure, Input } from "@heroui/react";
type FoodData = {
  id: number;
  Name: string;
  Address: string;
  PostCode: string;
  Rating: number;
  TypeOfFood: string;
};
export default function Home() {
  const [foodData, setData] = useState<FoodData[]>([]);
  const [search, setSearch] = useState<FoodData[]>([]);
  const {isOpen, onOpen, onOpenChange} = useDisclosure();

  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setSearch(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(foodData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    const newsearch = foodData.filter((item) =>
      item.Name.toLowerCase().includes(query.toLowerCase())
    );
    setSearch(newsearch);
    // search.length===0 && alert("No results found");
  };
  console.log("search", search);
  return (
    <section className=" min-h-screen bg-gray-100">
      <div className="p-4 flex justify-end">
        <div className="p-2 flex justify-center gap-2">
          <form className="w-80  relative ">
            <div className="relative">
              <input
                type="search"
                placeholder="Search Here..."
                onChange={handleChange}
                className=" w-full h-10 p-4 border-gray-300 border-2 rounded-md text-black"
              />
            </div>
          </form>
          <button className="flex justify-center p-3 bg-sky-700 text-white rounded-md">
            <FaSearch />
          </button>
          <button className="flex justify-center p-3 bg-sky-700 text-white rounded-md">
            <IoMdPrint />
          </button>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <table className="w-full mx-10">
          <thead>
            <tr className="h-10 text-blue-400">
              <th className=" text-start "> Name</th>
              <th className=" text-start"> Address</th>
              <th className=" text-start"> Postcode</th>
              <th className=" text-start"> Rating</th>
              <th className=" text-start"> Type of food</th>
              <th className=" text-start  text-black "> Action</th>
            </tr>
          </thead>
          <tbody className="content-center">
            {search && search.length > 0 ? (
              search.map((data) => (
                <tr
                  key={data.id}
                  className="border-t-2 h-10 border-gray-300 bg-gray-200 text-black w-60"
                >
                  <td className="text-start">{data.Name}</td>
                  <td className="text-start">{data.Address}</td>
                  <td className="text-start">{data.PostCode}</td>
                  <td className="text-start">{data.Rating}</td>
                  <td className="text-start">{data.TypeOfFood}</td>
                  <td className="p-2 flex justify-start gap-2">
                    <button onClick={onOpen} className="flex justify-center p-2 bg-sky-700 text-white rounded-md">
                      <FiEdit />
                    </button>
                    <button className="flex justify-center p-2 bg-red-600 text-white rounded-md">
                      <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center py-4 text-gray-800">
                  No data found
                </td>
              </tr>
            )}
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
      </div>
       <Modal className="text-black" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Edit Information</ModalHeader>
              <ModalBody>
               <Input
                 label="Name"
                //  placeholder="Enter your Name"
                 variant="bordered"
               />
                <Input
                 label="Address"
                 variant="bordered"
               /> <Input
                 label="Post Code"
                 variant="bordered"
               /> <Input
                 label="Rating"
                 variant="bordered"
               /> <Input
                 label="Type of food"
                 variant="bordered"
               />
                {/* <div className="flex py-2 px-1 justify-between">
                </div> */}
              </ModalBody>
              
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
}
