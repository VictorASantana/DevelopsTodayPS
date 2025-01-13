"use client";
import Link from "next/link";
import { useState } from "react";

export const Filter = ({carBrands, modelYears}) => {
  const [selectedBrand, setSelectedBrand] = useState();
  const [selectedYear, setSelectedYear] = useState();
  const [isBrandActive, setIsBrandActive] = useState(false);
  const [isYearActive, setIsYearActive] = useState(false);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex gap-10">
        <div>
          <button 
            id="dropdownHoverButton" 
            data-dropdown-toggle="dropdownHover" 
            data-dropdown-trigger="hover" 
            onClick={() => setIsBrandActive(!isBrandActive)} 
            className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none font-medium rounded-lg text-sm px-5
            py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">{selectedBrand ? selectedBrand.MakeName : 'Car Brand'} 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

            {isBrandActive && <div id="dropdownHover" className="z-10 bg-background divide-y divide-gray-100 rounded-lg shadow w-44 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-background max-h-50">
                <ul className="py-2 text-sm text-white max-h-44" aria-labelledby="dropdownHoverButton">
                  {carBrands.map((item, i) => {
                    return (
                      <li key={i}>
                        <p className="block bg-px-4 py-2 hover:bg-orange-300 hover:text-black rounded-lg p-4 font-bold cursor-pointer" onClick={() => setSelectedBrand(item)}>
                          {item.MakeName}
                        </p>
                      </li>
                    )
                  })}
                </ul>
            </div>}
          
        </div>
        <div>
          <button 
            id="dropdownHoverButton" 
            data-dropdown-toggle="dropdownHover" 
            data-dropdown-trigger="hover" 
            onClick={() => setIsYearActive(!isYearActive)} 
            className="text-white bg-orange-500 hover:bg-orange-600 focus:outline-none font-medium rounded-lg text-sm px-5
            py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button">{selectedYear ? selectedYear : 'Model Year'} 
            <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
            </svg>
          </button>

          {isYearActive && <div id="dropdownHover" className="z-10 bg-background divide-y divide-gray-100 rounded-lg shadow w-44 overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-background max-h-50">
              <ul className="py-2 text-sm text-white max-h-44" aria-labelledby="dropdownHoverButton">
                {modelYears.map((item, i) => {
                  return (
                    <li key={i}>
                      <p className="block bg-px-4 py-2 hover:bg-orange-300 hover:text-black rounded-lg p-4 font-bold cursor-pointer" onClick={() => setSelectedYear(item)}>
                        {item}
                      </p>
                    </li>
                  )
                })}
              </ul>
          </div>}
        </div>
      </div>
      {selectedBrand && selectedYear ? 
      <Link className={`px-4 py-2 text-white font-semibold rounded-lg ${selectedBrand && selectedYear ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400 cursor-not-allowed'}`} href={`/result/${selectedBrand.MakeId}/${selectedYear}`}>Results</Link> : 
      <button 
        className={'px-4 py-2 text-white font-semibold rounded-lg bg-gray-400 cursor-not-allowed'}>
        Results
      </button>}
    </div>
  )
}