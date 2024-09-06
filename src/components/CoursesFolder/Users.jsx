import React, { useState, useMemo } from "react";
import userdata from "../../data.json";
import { FaSearch } from "react-icons/fa";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

function Users() {
  const [itemsPerPage, setItemsPerPage] = useState(50);
  const [searchItem, setSearchItem] = useState("");
  const [sortCriteria, setSortCriteria] = useState("date");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [currentChunk, setCurrentChunk] = useState(1);
  const [jumpPage, setJumpPage] = useState("");

  const pagesPerChunk = 10;

  const filteredItems = useMemo(() => {
    return userdata.filter((user) => {
      const searchLower = searchItem.toLowerCase();
      const lastName = user.last_name ? user.last_name.toLowerCase() : "";
      const email = user.email ? user.email.toLowerCase() : "";
      const dateJoined = user.datejoined ? String(user.datejoined) : "";

      return (
        searchLower === "" ||
        lastName.includes(searchLower) ||
        email.includes(searchLower) ||
        dateJoined.includes(searchItem)
      );
    });
  }, [searchItem]);

  const sortedItems = useMemo(() => {
    const sorted = [...filteredItems].sort((a, b) => {
      let comparison = 0;
      if (sortCriteria === "date") {
        comparison = new Date(b.datejoined) - new Date(a.datejoined);
      } else if (sortCriteria === "name") {
        comparison = a.last_name.localeCompare(b.last_name);
      } else if (sortCriteria === "email") {
        comparison = a.email.localeCompare(b.email);
      } else if (sortCriteria === "gender") {
        comparison = a.gender.localeCompare(b.gender);
      }

      return sortDirection === "desc" ? comparison : -comparison;
    });

    return sorted;
  }, [filteredItems, sortCriteria, sortDirection]);

  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedItems.slice(startIndex, startIndex + itemsPerPage);

  const chunkStart = (currentChunk - 1) * pagesPerChunk + 1;
  const chunkEnd = Math.min(chunkStart + pagesPerChunk - 1, totalPages);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    if (page < chunkStart || page > chunkEnd) {
      setCurrentChunk(Math.floor((page - 1) / pagesPerChunk) + 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  const handleSortChange = (column) => {
    setSortCriteria(column);
    setSortDirection((prevDirection) =>
      prevDirection === "desc" ? "asc" : "desc"
    );
  };

  const handleJumpPageChange = (event) => {
    setJumpPage(event.target.value);
  };

  const handleJumpToPage = () => {
    const page = Number(jumpPage);
    if (page >= 1 && page <= totalPages) {
      handlePageChange(page);
      setJumpPage("");
    }
  };

  const handleJumpToFirstPage = () => {
    handlePageChange(1);
  };

  const handleJumpToFinalPage = () => {
    handlePageChange(totalPages);
  };

  return (
    <>
      <div className="overflow-x-auto px-4 lg:px-20 py-4 max-w-sm">
        <div className="mb-8 flex flex-col md:flex-row items-center justify-between">
          <h3 className="text-2xl font-bold underline mb-4 md:mb-0">
            Enrolled Users
          </h3>
          <div className="flex flex-col md:flex-row items-center gap-2">
            <div className="relative w-full md:w-64 mb-4 md:mb-0">
              <input
                type="text"
                placeholder="Search by name, email, or date joined"
                onChange={(e) => setSearchItem(e.target.value)}
                className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2"
              />
              <FaSearch className="absolute left-3 top-3 text-gray-400" />
            </div>
            <div className="flex flex-col items-center md:flex-row md:gap-0">
              <label
                htmlFor="items-per-page"
                className="text-sm text-gray-700 mr-2 md:mr-4"
              >
                per page:
              </label>
              <select
                id="items-per-page"
                value={itemsPerPage}
                onChange={handleItemsPerPageChange}
                className="bg-white border border-gray-600 rounded-md shadow-sm p-2 focus:outline-none w-20 md:w-20"
              >
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={75}>75</option>
                <option value={100}>100</option>
              </select>
            </div>
            <div className="relative flex items-center mt-4 md:mt-0 border border-gray-200 rounded-md w-fit">
              <input
                type="number"
                value={jumpPage}
                onChange={handleJumpPageChange}
                className="p-2 w-20 pr-4"
                placeholder="Page"
              />
              <button
                onClick={handleJumpToPage}
                className="absolute right-0 top-0 bottom-0 bg-blue-500 text-white px-1 py-2 rounded-r-md"
              >
                Go
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th
                    className="px-4 py-2 text-left text-gray-600 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSortChange("name")}
                  >
                    Username{" "}
                    {sortCriteria === "name"
                      ? sortDirection === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </th>
                  <th
                    className="px-4 py-2 text-left text-gray-600 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSortChange("email")}
                  >
                    Email{" "}
                    {sortCriteria === "email"
                      ? sortDirection === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </th>
                  <th
                    className="px-4 py-2 text-left text-gray-600 whitespace-nowrap cursor-pointer"
                    onClick={() => handleSortChange("date")}
                  >
                    Date Joined{" "}
                    {sortCriteria === "date"
                      ? sortDirection === "asc"
                        ? "▲"
                        : "▼"
                      : ""}
                  </th>
                  <th className="px-4 py-2 text-left text-gray-600 whitespace-nowrap cursor-pointer">
                    Gender
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((user, index) => (
                  <tr key={index} className="border-t">
                    <td className="px-4 py-2">{user.last_name}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.datejoined}</td>
                    <td className="px-4 py-2">{user.gender}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-4 flex justify-center items-center">
          <Pagination>
            <PaginationContent>
              <button
                onClick={handleJumpToFirstPage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                First Page
              </button>
              <PaginationItem>
                <PaginationPrevious
                  href="#"
                  onClick={() => handlePageChange(currentPage - 1)}
                />
              </PaginationItem>
              {Array.from(
                { length: chunkEnd - chunkStart + 1 },
                (_, i) => chunkStart + i
              ).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    href="#"
                    className={
                      page === currentPage ? "active bg-gray-300" : "inactive"
                    }
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
              {chunkEnd < totalPages && (
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
              )}
              <PaginationItem>
                <PaginationNext
                  href="#"
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </PaginationItem>
              <button
                onClick={handleJumpToFinalPage}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
              >
                Last Page
              </button>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
}

export default Users;
