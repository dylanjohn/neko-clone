import Link from "next/link";

export default function Toggle() {
  return (
    <>
      <button
        id="toggle-theme"
        type="button"
        className="flex h-9 w-9 shrink-0 touch-manipulation items-center justify-center rounded-md bg-gray-200 hover:bg-gray-200 ring-gray-300 transition-all hover:ring-2"
        title="Toggle theme"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="h-5 w-5 text-gray-800"
        >
          <path
            className="inline"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          ></path>
        </svg>
      </button>
    </>
  );
}