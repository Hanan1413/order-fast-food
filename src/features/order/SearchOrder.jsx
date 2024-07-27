import React, { useState } from "react";

function SearchOrder() {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    Navigate(`/order/${query}`);
    setQuery("");
  }

  <form onSubmit={handleSubmit}>
    <input value={query} onChange={(e) => setQuery(e.target.value)} />
  </form>;
}

export default SearchOrder;
