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

  const titleList = [
    {
      title: "sitename",
      key: "sitename",
    },
    {
      title: "twd97lon",
      key: "twd97lon",
    },
    {
      title: "twd97lat",
      key: "twd97lat",
    },
    {
      title: "sitetype",
      key: "sitetype",
    },
  ];

  return (
    <>
      <h1 className="m-4 text-5xl font-extrabold dark:text-white">
        AQF
        <small className="ms-2 font-semibold text-gray-500 dark:text-gray-400">
          Ministry of Environment
        </small>
      </h1>
      <SearchWithDropdown />
      <div className="mx-auto p-3.5 ">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                {titleList.map((item, index) => (
                  <th scope="col" className="px-6 py-3" key={index}>
                    <div className="flex items-center">
                      {item.title}
                      <a href="#">
                        <svg
                          className="ms-1.5 size-3"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                        </svg>
                      </a>
                    </div>
                  </th>
                ))}
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
                  <td className="px-6 py-4"> {Math.round(item.twd97lon)}</td>
                  <td className="px-6 py-4"> {Math.round(item.twd97lat)}</td>
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
