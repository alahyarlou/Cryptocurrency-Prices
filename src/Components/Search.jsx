import React from "react";

const Search = (props) => {
  return (
    <div className="sticky top-2 z-20">
      <div className="mb-5 relative mx-auto w-full  max-w-md">
        <input
          type="text"
          value={props.searchCoins}
          className="shadow-md border border-slate-600 outline-indigo-600 pl-10 pr-3 py-3 rounded-md w-full text-lg"
          placeholder="search..."
          onChange={props.searchHandler}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-slate-500 absolute top-4 left-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
