"use client";
import Image from "next/image";
import Search from "./components/table/search";
import { FiEdit } from "react-icons/fi";
import { FaRegTrashAlt, FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoMdPrint } from "react-icons/io";
import {
  Button,
  Checkbox,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Input,
} from "@heroui/react";
type FoodData = {
  id: number;
  Name: string;
  Address: string;
  PostCode: string;
  Rating: number;
  TypeOfFood: string;
};
export default function Home() {
  const [foodData, setFoodData] = useState<FoodData[]>([]);
  const [search, setSearch] = useState<FoodData[]>([]);
  const [select, setSelect] = useState<FoodData | null>(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  useEffect(() => {
    fetch("/foodData.json")
      .then((res) => res.json())
      .then((data) => {
        setFoodData(data);
        setSearch(data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(foodData);

  const handleEdit = (id: number) => {
    console.log("editId", id);
    const row = foodData.find((item) => item.id === id);
    if (!row) return;
    setSelect({ ...row });

    onOpen();
    // const data = foodData.filter(item => item.id === id);
    // console.log ("Clicked Data:", data);
    // if(data !== undefined)
    //   setData(data.foodData)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let query = e.target.value;
    const newsearch = foodData.filter((item) =>
      item.Name.toLowerCase().includes(query.toLowerCase())
    );
    setSearch(newsearch);
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
                    <button
                      onClick={() => handleEdit(data.id)}
                      className="flex justify-center p-2 bg-sky-700 text-white rounded-md"
                    >
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
                <td className="text-center py-4 text-gray-800 ">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Modal className="text-black" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Edit Information
              </ModalHeader>
              <ModalBody>
                <Input
                  label="Name"
                  variant="bordered"
                  value={select?.Name || ""}
                  onChange={(e) =>
                    setSelect(
                      select ? { ...select, Name: e.target.value } : null
                    )
                  }
                />
                <Input
                  label="Address"
                  variant="bordered"
                  value={select?.Address || ""}
                  onChange={(e) =>
                    setSelect(
                      select ? { ...select, Address: e.target.value } : null
                    )
                  }
                />{" "}
                <Input
                  label="Post Code"
                  variant="bordered"
                  value={select?.PostCode || ""}
                  onChange={(e) =>
                    setSelect(
                      select ? { ...select, PostCode: e.target.value } : null
                    )
                  }
                />{" "}
                <Input
                  label="Rating"
                  variant="bordered"
                  value={select?.Rating !== undefined ? String(select.Rating) : ""}
                  onChange={(e) =>
                    setSelect(
                      select ? { ...select, Rating: Number(e.target.value) } : null
                    )
                  }
                />{" "}
                <Input
                  label="Type of food"
                  variant="bordered"
                  value={select?.TypeOfFood || ""}
                  onChange={(e) =>
                    setSelect(
                      select ? { ...select, TypeOfFood: e.target.value } : null
                    )
                  }
                />
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
