import React from "react";
import { BiSort } from "react-icons/bi";
// Reusable JobCard Component
function JobCard({
  logo,
  jobTitle,
  company,
  location,
  salaryRange,
  datePosted,
}) {
  return (
    <div className="bg-white border-b border-gray-300  p-4 mb-4 flex items-start gap-4">
      {/* Company Logo */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt={`${company} logo`}
          className="w-12 h-12 object-contain"
        />
      </div>

      {/* Job Details */}
      <div className="flex-1">
        <h3 className="font-semibold text-lg">{jobTitle}</h3>
        <p className="text-gray-500">
          {company} • {location} • {salaryRange} • {datePosted}
        </p>
        {/* Action Buttons */}
        <div className="mt-4 flex space-x-2">
          <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md">
            Save
          </button>
          <button className="bg-black text-white px-4 py-2 rounded-md">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

// Main App Component
export default function Second() {
  // Example job listings data
  const jobListings = [
    {
      logo: "https://dummyimage.com/50x50", // Replace with actual logo URLs
      jobTitle: "Founding Product Designer (UI/UX)",
      company: "Q",
      location: "San Francisco",
      salaryRange: "$100k – $150k • 0.25% – 1.0%",
      datePosted: "today",
    },
    {
      logo: "https://dummyimage.com/50x50",
      jobTitle: "Business Development Representative",
      company: "Arcade",
      location: "Remote",
      salaryRange: "$60k – $75k",
      datePosted: "today",
    },
    {
      logo: "https://dummyimage.com/50x50",
      jobTitle: "Payroll Specialist",
      company: "Level Agency",
      location: "Remote",
      salaryRange: "$65k – $80k",
      datePosted: "today",
    },
    {
      logo: "https://dummyimage.com/50x50",
      jobTitle: "Senior Propulsion Fluids Analyst",
      company: "Ursa Major Technologies",
      location: "Berthoud",
      salaryRange: "$100k – $150k",
      datePosted: "today",
    },
    {
      logo: "https://dummyimage.com/50x50",
      jobTitle: "Senior Product Designer",
      company: "Snappy",
      location: "New York City",
      salaryRange: "$150k – $170k",
      datePosted: "today",
    },
  ];

  return (
    <div className="max-w-lg mx-auto p-4">
      {/* Filter */}
      <div className="sticky top-[66px] z-10 bg-white flex gap-2 flex-nowrap overflow-auto mb-2 py-2 ">
        <select className="bg-gray-100 py-1 px-3 rounded-lg text-sm">
          <option value="">
            <BiSort size={15} /> Relevance
          </option>
          <option value="">Relevance</option>
          <option value="">Relevance</option>
        </select>
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm">Paid</div>
        <select className="bg-gray-100 py-1 px-3 rounded-lg text-sm">
          <option value="">Domain</option>
          <option value="">Relevance</option>
          <option value="">Relevance</option>
        </select>
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm">
          Internship
        </div>
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm">Remote</div>
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm">
          Freelancing
        </div>
        <div className="bg-gray-100 py-1 px-3 rounded-lg text-sm whitespace-nowrap">
          Full Time
        </div>
      </div>

      {jobListings.map((job, index) => (
        <JobCard
          key={index}
          logo={job.logo}
          jobTitle={job.jobTitle}
          company={job.company}
          location={job.location}
          salaryRange={job.salaryRange}
          datePosted={job.datePosted}
        />
      ))}
    </div>
  );
}
