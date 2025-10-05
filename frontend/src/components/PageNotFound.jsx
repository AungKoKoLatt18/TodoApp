import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-red-500">
      <h1 className="text-6xl font-bold">404</h1>
      <h2 className="mt-2 text-xl font-semibold">Page Not Found</h2>
      <p className="mt-1 text-gray-400 text-center">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <Link
        to="/"
        className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white font-medium hover:bg-red-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default PageNotFound;
