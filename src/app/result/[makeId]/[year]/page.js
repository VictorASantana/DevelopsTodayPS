"use client";

import { fetchModels } from "@/app/server/cars";
import { useEffect, useState, use, Suspense } from "react";
import Logo from '../../../../../public/images/logo.png'
import Image from "next/image";
import Loading from "./loading";

const ResultPage = ({params}) => {
  const {makeId, year} = use(params);
  const [vehicles, setVehicles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchVehicles = async () => {
      setError(false);
      const response = await fetchModels(makeId, year);
      if (response instanceof Error) {
        setError(true);
      } else {
        setVehicles(response.Results);
      }
    }

    fetchVehicles();
  }, [makeId, year]);

  return (
    <div className="grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex gap-4 justify-content-center">
        <Image src={Logo} alt="site logo" width={60}/>
        <h2 className="text-3xl">Your<strong>Deal!</strong></h2>
      </header>

        <h1 className="text-4xl font-bold">{'Vehicles found: (' + vehicles.length + ')' }</h1>
        {error ? 
        <h2>
          Sorry. We could not load your cars list...
        </h2> : 
        <Suspense fallback={<Loading />}><ul className="flex gap-5 flex-wrap overflow-x-auto">
          {vehicles.map((vehicle, i) => (
            <li key={i} className="flex gap-2 p-4">
              <div className="bg-gray-400 border rounded-lg shadow-lg p-4">
                <p className="text-xl">{vehicle.Make_Name}</p>
                <p>{vehicle.Model_Name}</p>
              </div>
            </li>
          ))}
        </ul>
        </Suspense>}
        
    </div>
  )
}

export default  ResultPage;