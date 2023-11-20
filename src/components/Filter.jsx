"use client";
import React, { useCallback, useState } from "react";
import { useSearchParams, useRouter  } from "next/navigation";
import { usePathname } from "next/navigation";

const Filter = () => {
  const [selectedYear, setSelectedYear] = useState(null);
  const [launch, setlaunch] = useState(null);
  const [landing, setLanding] = useState(null);
  const searchParams = useSearchParams();
  const router= useRouter()
  const pathname=usePathname()
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      return params.toString();
    },
    [searchParams]
  );

  const handleButtonClick = (year) => {
    setSelectedYear(year);
    
    router.push(pathname + '?' + createQueryString('launch_year', year))
  };
  const handleSuccessnClick = (i) => {
    setlaunch(i);
    router.push(pathname + '?' + createQueryString('launch_success', i))
  };
  const handleLandingClick = (i) => {
    setLanding(i);
    
    router.push(pathname + '?' + createQueryString('land_success', i))
  };

 

  return (
    <div className="flex flex-col gap-5 bg-white md:sticky top-0 h-[900px]">
      <div className="ml-2 font-bold text-[25px]" >
        Filters
      </div>
      <div>
        <p className="text-center">Launch Year</p>
        <div className="grid grid-cols-2 gap-5 place-items-center border-t p-2 mx-4 border-black">
          {[
            2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015,2016,2017, 2018,
            2019, 2020, 2021, 2022, 2023,
          ].map((year) => (
            <button
              key={year}
              className={`px-4 py-2 rounded focus:outline-none ${
                selectedYear === year
                ? "bg-green-500 text-black"
                : "bg-green-300 text-black"
              }`}
              onClick={() => handleButtonClick(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center underline mb-5">Successfull Launch</p>
        <div className="flex justify-around items-center">
          {["true", "false"].map((year) => (
            <button
              key={year}
              className={` capitalize px-4 py-2 rounded focus:outline-none ${
                launch === year
                  ? "bg-green-500 text-black"
                  : "bg-green-300 text-black"
              }`}
              onClick={() =>handleSuccessnClick(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div>
        <p className="text-center underline mb-5">Successfull Landing</p>
        <div className="flex justify-around items-center">
          {["true", "false"].map((year) => (
            <button
              key={year}
              className={` capitalize px-4 py-2 rounded focus:outline-none ${
                landing === year
                    ? "bg-green-500 text-black"
                  : "bg-green-300 text-black"
              }`}
              onClick={() =>handleLandingClick(year)}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filter;
