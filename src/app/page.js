import Filter from "@/components/Filter";
import ProductCard from "@/components/ProductCard";
import queryString from "query-string";
import { API_URL } from "@/lib/config";

const getData = async (searchParams) => {
  const urlParams = {
    limit: 100,
    launch_year: searchParams.launch_year,
    launch_success: searchParams.launch_success,
    land_success: searchParams.land_success,
  };

  const searchQuery = queryString.stringify(urlParams);
  const res = await fetch(`${API_URL}?${searchQuery}`);
  const data = await res.json();
  return data;
};

export default async function Home({searchParams}) {
  const data = await getData(searchParams);
 


  return (
    <div className=" bg-gray-100">
      <p className="font-bold text-xl md:text-[25px] m-1">SpaceX Launch Program</p>
       <div className="p-5 grid grid-cols-1 md:grid-cols-[300px_1fr] bg-gray-100 relative">
      <div className="mb-6 md:mr-4">
      <Filter/>

      </div>
      <div className="flex items-center justify-center h-full">
      <div className="grid gap-5  grid-cols-1 md:grid-cols-2  xl:grid-cols-4  place-items-center">
        {data.length > 0 ? (
          data.map((item, index) => <ProductCard item={item} key={index} />)
        ) : (
          <p className="p-auto">No items found</p>
        )}
      </div>
      </div>
    
      
    </div>

    </div>
   
  );
}
