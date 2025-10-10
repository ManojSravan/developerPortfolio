import React from "react";

const clients = [
  {
    name: "Microsoft",
    svg: (
      <svg
        className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto text-gray-800 dark:text-neutral-200"
        viewBox="0 0 2499 614"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path d="m431.7 0h-235.5v317.8h317.8v-235.5c0-45.6-36.7-82.3-82.3-82.3zm-308.9 0h-40.5c-45.6 0-82.3 36.7-82.3 82.3v40.5h122.8zm-122.8 196.2h122.8v122.8h-122.8zm392.5 317.8h40.5c45.6 0 82.3-36.7 82.3-82.3v-39.2h-122.8zm-196.3-121.5h122.8v122.8h-122.8zm-196.2 0v40.5c0 45.6 36.7 82.3 82.3 82.3h40.5v-122.8zm828-359.6h-48.1v449.4h254.5v-43h-206.4z" />
      </svg>
    ),
  },
  {
    name: "Airbnb",
    svg: (
      <svg
        className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
        viewBox="0 0 320 100"
        xmlns="http://www.w3.org/2000/svg"
        fill="#ff5a5f"
      >
        <path d="M168.7 25.1c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5 2.8-6.5 6.5-6.5c3.7.1 6.5 3 6.5 6.5z" />
      </svg>
    ),
  },
  {
    name: "Google",
    svg: (
      <svg
        className="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto"
        viewBox="0 0 267 65"
        xmlns="http://www.w3.org/2000/svg"
        fill="#0B65C2"
      >
        <path d="M263.043 56.411a4.418 4.418 0 1 0 .085 0z" />
      </svg>
    ),
  },
];

export default function Clients() {
  return (
    <section className="bg-gray-900 py-14">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-100 mb-12">
          My <em className="text-blue-400 not-italic">Services & Expertise</em>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-neutral-800 hover:scale-105 transition-transform duration-300"
              title={client.name}
            >
              {client.svg}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
