import React from "react";
import { RiProfileLine } from "react-icons/ri";
import { FaArrowDown } from "react-icons/fa";

function JobCard({
  companyName,
  companySize,
  description,
  labels,
  openPositions,
}) {
  return (
    <div className="bg-white rounded-lg mb-6 border-gray-300 border-2">
      {/* Header: Company Name and Size */}

      <div className="px-2 pt-2 flex items-center space-x-2">
        <div>
          <RiProfileLine size={35} />
        </div>
        <div className="flex flex-col">
          <div className="font-semibold text-base">{companyName}</div>
          <div className="text-gray-500 text-sm">{companySize} employees</div>
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-600 mb-4 text-sm pt-1 px-2">{description}</p>

      {/* Labels (like actively hiring, growing fast, etc.) */}
      <div className="flex flex-wrap gap-2 mb-4 px-2">
        {labels.map((label, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-medium ${label.style}`}
          >
            {label.text}
          </span>
        ))}
      </div>
      <div className="border-t pt-2 border-gray-300"></div>
      {/* Footer: Open Positions */}
      <div className="flex justify-between items-center text-sm px-2 pb-2">
        <div className="text-gray-700">{openPositions} open positions</div>
        <div className="text-blue-500">➔</div>
      </div>
    </div>
  );
}

// Main App Component
export default function First() {
  const jobListings = [
    {
      companyName: "AI Workforce",
      companySize: "11-50",
      description: "AI workforce for SMEs",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
        { text: "GROWING FAST", style: "bg-purple-100 text-purple-600" },
      ],
      openPositions: 24,
    },
    {
      companyName: "Red Collar",
      companySize: "51-200",
      description: "Creating digital products with a human face",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
        {
          text: "TOP 5% OF RESPONDERS",
          style: "bg-yellow-100 text-yellow-600",
        },
        {
          text: "RESPONDS WITHIN A FEW DAYS",
          style: "bg-red-100 text-red-600",
        },
        { text: "GROWING FAST", style: "bg-purple-100 text-purple-600" },
      ],
      openPositions: 11,
    },
    {
      companyName: "Bask Health",
      companySize: "11-50",
      description: "Shopify for E-Prescribing",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
      ],
      openPositions: 14,
    },
    {
      companyName: "AI Workforce",
      companySize: "11-50",
      description: "AI workforce for SMEs",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
        { text: "GROWING FAST", style: "bg-purple-100 text-purple-600" },
      ],
      openPositions: 24,
    },
    {
      companyName: "Red Collar",
      companySize: "51-200",
      description: "Creating digital products with a human face",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
        {
          text: "TOP 5% OF RESPONDERS",
          style: "bg-yellow-100 text-yellow-600",
        },
        {
          text: "RESPONDS WITHIN A FEW DAYS",
          style: "bg-red-100 text-red-600",
        },
        { text: "GROWING FAST", style: "bg-purple-100 text-purple-600" },
      ],
      openPositions: 11,
    },
    {
      companyName: "Bask Health",
      companySize: "11-50",
      description: "Shopify for E-Prescribing",
      labels: [
        { text: "ACTIVELY HIRING", style: "bg-green-100 text-green-600" },
      ],
      openPositions: 14,
    },
  ];

  return (
    <div className="max-w-md mx-auto p-4">
      {/* Filter */}
      <div className="flex  gap-2  flex-nowrap overflow-auto  mb-2 ">
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm w-full flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div>All Application</div>
            <div className="border-2 border-gray-300 px-2 py-1 rounded-lg">
              See All
            </div>
          </div>
          <div>
            <FaArrowDown />
          </div>
        </div>
      </div>
      {jobListings.map((job, index) => (
        <JobCard
          key={index}
          companyName={job.companyName}
          companySize={job.companySize}
          description={job.description}
          labels={job.labels}
          openPositions={job.openPositions}
        />
      ))}
    </div>
  );
}
