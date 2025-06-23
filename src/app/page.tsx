import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="p-4 ">
        <div className=" w-60 p-4 border-2 rounded-lg "></div>
      </div>
<div className="w-full flex justify-center justify-self-center">
      <table className=" table-auto ">
        <thead>
          <tr className="bg-gray-500 text-black ">
            <th> Name</th>
            <th> Address</th>
            <th> Postcode</th>
            <th> Rating</th>
            <th> Type of food</th>
            <th> Action</th>
          </tr>
        </thead>
        <tbody className="">
          <tr className="bg-gray-200 text-black ">
            <td> CN Chinese </td>
            <td> 228 City Road</td>
            <td> 3JH</td>
            <td> 5</td>
            <td> Chinese</td>
            <td> </td>
          </tr>
          <tr className=" text-black">
            <td>007 Takeaway </td>
            <td>6 Drummond Street </td>
            <td>1HY </td>
            <td>6 </td>
            <td> Pizza </td>
            <td></td>
          </tr>
          <tr className="bg-gray-200 text-black">
            <td>042 Restaurant & Bar </td>
            <td> 885 High Road </td>
            <td> 1HR</td>
            <td> 32</td>
            <td> African</td>
            <td></td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}
