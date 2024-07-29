import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={query} onChange={(e) => setQuery(e.target.value)}  className="rounded-full bg-yellow-100 p-2 text-sm sm:focus:w-72 transiton-all duration-300 focus:outline-none focus:ring focus:ring-yellow-500 focus-ring-opacity-50 sm:w-64"  placeholder="Search order" />
    </form>
  );
}

export default SearchOrder;
