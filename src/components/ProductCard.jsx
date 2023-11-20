import React from "react";
import Image from "next/image";

const ProductCard = ({ item }) => {
 
  return (
    <div className="border p-3 rounded-md  w-full md:w-[340px] bg-white">
      <div className="w-full flex justify-center items-center bg-gray-100 p-2">
        <Image
          src={item.links.mission_patch}
          alt="item-image"
          width={200}
          height={200}
        />
      </div>

      <h4 className="text-xl font-bold mb-2 text-blue-700">
        {item.mission_name}
      </h4>
      <div>
      <p className="font-bold">Mission Ids:</p>
        
          {item.mission_id.map((i, index) => (
            <li  className=' list-disc'key={index}>{i}</li>
          ))}
        

      </div>
        
      
      <p>
        <span className="font-bold ml-2 ">Launch Year:</span>
        {item.launch_year}
      </p>
      <p>
        <span className="font-bold ml-2">Successfull Launch:</span>
        {item.launch_success ? 'True':'False'}
      </p>
      <p>
        <span className="font-bold ml-2">Successfull Landing:</span>
        {item?.rocket?.first_stage.cores[0]?. land_success ? 'True':'False'}
      </p>
    </div>
  );
};

export default ProductCard;
