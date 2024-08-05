// src/components/CandidatesTable.jsx
import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
} from "@tanstack/react-table";

// Dummy data
const data = [
  {
    name: "Alice Johnson",
    rank: 1,
    courses: "Mathematics, Physics",
    level: "PhD",
    core: "Data Science",
    university: "MIT",
  },
  {
    name: "Bob Smith",
    rank: 2,
    courses: "Biology, Chemistry",
    level: "Masters",
    core: "Biotech",
    university: "Harvard",
  },
  {
    name: "Charlie Brown",
    rank: 3,
    courses: "Computer Science, Math",
    level: "PhD",
    core: "AI",
    university: "Stanford",
  },
  {
    name: "Alice Johnson",
    rank: 1,
    courses: "Mathematics, Physics",
    level: "PhD",
    core: "Data Science",
    university: "MIT",
  },
  {
    name: "Bob Smith",
    rank: 2,
    courses: "Biology, Chemistry",
    level: "Masters",
    core: "Biotech",
    university: "Harvard",
  },
  {
    name: "Charlie Brown",
    rank: 3,
    courses: "Computer Science, Math",
    level: "PhD",
    core: "AI",
    university: "Stanford",
  },
  {
    name: "Alice Johnson",
    rank: 1,
    courses: "Mathematics, Physics",
    level: "PhD",
    core: "Data Science",
    university: "MIT",
  },
  {
    name: "Bob Smith",
    rank: 2,
    courses: "Biology, Chemistry",
    level: "Masters",
    core: "Biotech",
    university: "Harvard",
  },
  {
    name: "Charlie Brown",
    rank: 3,
    courses: "Computer Science, Math",
    level: "PhD",
    core: "AI",
    university: "Stanford",
  },
  {
    name: "Alice Johnson",
    rank: 1,
    courses: "Mathematics, Physics",
    level: "PhD",
    core: "Data Science",
    university: "MIT",
  },
  {
    name: "Bob Smith",
    rank: 2,
    courses: "Biology, Chemistry",
    level: "Masters",
    core: "Biotech",
    university: "Harvard",
  },
  {
    name: "Charlie Brown",
    rank: 3,
    courses: "Computer Science, Math",
    level: "PhD",
    core: "AI",
    university: "Stanford",
  },
  // Add more dummy data as needed
];

const columns = [
  { header: "Candidate Name", accessorKey: "name" },
  { header: "Rank", accessorKey: "rank" },
  { header: "Courses", accessorKey: "courses" },
  { header: "Level", accessorKey: "level" },
  { header: "Core", accessorKey: "core" },
  { header: "University", accessorKey: "university" },
];

// const CandidatesTable = () => {
//   const [pageSize, setPageSize] = useState(5);
//   const [globalFilter, setGlobalFilter] = useState("");

//   const table = useReactTable({
//     data,
//     columns,
//     state: {
//       pagination: {
//         pageSize,
//         pageIndex: 0,
//       },
//       globalFilter,
//     },
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     globalFilterFn: (rows, columnIds, filterValue) => {
//       if (!filterValue) return rows;
//       const lowercasedFilterValue = filterValue.toLowerCase();
//       return rows.filter(
//         (row) =>
//           row.original.name.toLowerCase().includes(lowercasedFilterValue) ||
//           row.original.courses.toLowerCase().includes(lowercasedFilterValue) ||
//           row.original.level.toLowerCase().includes(lowercasedFilterValue) ||
//           row.original.core.toLowerCase().includes(lowercasedFilterValue) ||
//           row.original.university.toLowerCase().includes(lowercasedFilterValue)
//       );
//     },
//     onGlobalFilterChange: setGlobalFilter,
//   });

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="border border-gray-300 rounded-md px-3 py-2"
//           value={globalFilter}
//           onChange={(e) => setGlobalFilter(e.target.value)}
//         />
//       </div>

//       <div className="mb-4">
//         <label htmlFor="entries" className="mr-2">
//           Show
//         </label>
//         <select
//           id="entries"
//           value={pageSize}
//           onChange={(e) => setPageSize(Number(e.target.value))}
//           className="border border-gray-300 rounded-md px-3 py-2"
//         >
//           <option value={5}>5</option>
//           <option value={10}>10</option>
//           <option value={20}>20</option>
//         </select>
//         <span className="ml-2">entries</span>
//       </div>

//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           {table.getHeaderGroups().map((headerGroup) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header) => (
//                 <th
//                   key={header.id}
//                   className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                 >
//                   {flexRender(
//                     header.column.columnDef.header,
//                     header.getContext()
//                   )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {table.getRowModel().rows.map((row) => (
//             <tr key={row.id}>
//               {row.getVisibleCells().map((cell) => (
//                 <td
//                   key={cell.id}
//                   className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div className="flex justify-between mt-4">
//         <button
//           onClick={() =>
//             table.setPageIndex(table.getState().pagination.pageIndex - 1)
//           }
//           disabled={!table.getCanPreviousPage()}
//           className="px-4 py-2 border border-gray-300 rounded-md"
//         >
//           Previous
//         </button>
//         <button
//           onClick={() =>
//             table.setPageIndex(table.getState().pagination.pageIndex + 1)
//           }
//           disabled={!table.getCanNextPage()}
//           className="px-4 py-2 border border-gray-300 rounded-md"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };
const CandidatesTable = () => {
  const [pageSize, setPageSize] = useState(5);
  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    data,
    columns,
    state: {
      pagination: {
        pageSize,
        pageIndex: 0,
      },
      globalFilter,
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    globalFilterFn: (rows, columnIds, filterValue) => {
      if (!filterValue) return rows;
      const lowercasedFilterValue = filterValue.toLowerCase();
      return rows.filter(
        (row) =>
          row.original.name.toLowerCase().includes(lowercasedFilterValue) ||
          row.original.courses.toLowerCase().includes(lowercasedFilterValue) ||
          row.original.level.toLowerCase().includes(lowercasedFilterValue) ||
          row.original.core.toLowerCase().includes(lowercasedFilterValue) ||
          row.original.university.toLowerCase().includes(lowercasedFilterValue)
      );
    },
    onGlobalFilterChange: setGlobalFilter,
  });

  const pageIndex = table.getState().pagination.pageIndex;
  const totalRows = table.getPreFilteredRowModel().rows.length;
  const startRow = pageIndex * pageSize + 1;
  const endRow = Math.min((pageIndex + 1) * pageSize, totalRows);

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 rounded-md px-3 py-2"
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="entries" className="mr-2">
          Show
        </label>
        <select
          id="entries"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="border border-gray-300 rounded-md px-3 py-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </select>
        <span className="ml-2">entries</span>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            table.setPageIndex(table.getState().pagination.pageIndex - 1)
          }
          disabled={!table.getCanPreviousPage()}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={() =>
            table.setPageIndex(table.getState().pagination.pageIndex + 1)
          }
          disabled={!table.getCanNextPage()}
          className="px-4 py-2 border border-gray-300 rounded-md"
        >
          Next
        </button>
      </div>

      <div className="mt-4 text-gray-500">
        {/* Showing {startRow} to {endRow} of {totalRows} entries */}
        Showing to {endRow} of {totalRows} entries
      </div>
    </div>
  );
};

export default CandidatesTable;
