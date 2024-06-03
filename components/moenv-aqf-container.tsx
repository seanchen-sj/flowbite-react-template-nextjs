"use client";

import SearchWithDropdown from "@/components/SearchWithDropdown";
import { useEffect, useState } from "react";

interface MoenvAQFContainerProps {
  api_key: string;
}

const MoenvAQFContainer = (moenvAQFContainerProps: MoenvAQFContainerProps) => {
  const host = `https://data.moenv.gov.tw`;
  const path = `/api/v2/aqx_p_07`;
  const requestLink = `${host}${path}?api_key=${moenvAQFContainerProps.api_key}`;
  const [aqfData, setAqfData] = useState(null as any);

  useEffect(() => {
    const fetchData = async () => {
      console.log("inininihn");
      try {
        const response = await fetch(requestLink);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAqfData(data);
      } catch (error) {
        //   setError(error);
      }
    };

    fetchData();
  }, [requestLink]);

  return (
    <>
      <h1 className="m-4 text-5xl font-extrabold dark:text-white">
        AQF
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Ministry of Environment
        </small>
      </h1>

      {console.log(aqfData?.records)}

      <div className="grid grid-cols-2 gap-2 py-3.5">
        <SearchWithDropdown />
      </div>
      <div className="grid grid-cols-2 gap-2 p-3.5">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  sitename
                </th>
                <th scope="col" className="px-6 py-3">
                  twd97lon
                </th>
                <th scope="col" className="px-6 py-3">
                  twd97lat
                </th>
                <th scope="col" className="px-6 py-3">
                  sitetype
                </th>
              </tr>
            </thead>
            <tbody>
              {aqfData?.records?.map((item: any, index: number) => (
                <tr
                  key={index}
                  className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {item.sitename}
                  </th>
                  <td className="px-6 py-4"> {item.twd97lon}</td>
                  <td className="px-6 py-4"> {item.twd97lat}</td>
                  <td className="px-6 py-4">$ {item.sitetype}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MoenvAQFContainer;
