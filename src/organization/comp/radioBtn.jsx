import React from "react";

const RadioGroup = ({ options, selectedOption, onChange }) => {
  return (
    <div className="mb-8 flex flex-row flex-wrap gap-4 w-9/12 ">
      {options.map((option) => (
        <label
          key={option.value}
          className="inline-flex items-center border-2 border-gray-300 px-3 py-2 rounded-full"
        >
          <input
            type="radio"
            name="reason"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={onChange}
            className="form-radio text-blue-500"
          />
          <span className="ml-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioGroup;
