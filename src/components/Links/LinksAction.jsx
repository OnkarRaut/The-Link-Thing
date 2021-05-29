import { useState } from "react";

export default function LinksAction(props) {
  const [newFormActive, setNewFormActive] = useState(true);
  return (
    <div className="w-100 w-2/4  mx-auto flex justify-between">
      <input
        type="text"
        className="w-4/12 p-2 border font-size-1 border-gray-400"
        placeholder="Search"
      ></input>
      <button
        className="px-5 py-2 tracking-wider bg-gray-800 text-gray-50 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={newFormActive}
      >
        New
      </button>
    </div>
  );
}
