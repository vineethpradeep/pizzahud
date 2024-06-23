import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchOrder() {
  const navigateTo = useNavigate();
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigateTo(`order/${query}`);
    setQuery("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="rounded-full bg-transparent px-4 focus:outline-none"
          type="text"
          placeholder="Search order#"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <button
        onClick={handleSubmit}
        className="bg-primary poppins transform rounded-full px-6 py-3 text-sm text-white ring-red-300 transition duration-300 hover:scale-105 focus:ring-4"
      >
        Search
      </button>
    </>
  );
}
