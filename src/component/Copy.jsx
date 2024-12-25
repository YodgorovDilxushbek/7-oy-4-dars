import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Copy() {
  const [copiedText, setCopiedText] = useState("");

  function notify() {
    toast.success("Text Copied To Clipboard", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "colored",
    });
  }

  function copyToClipBoard(e) {
    e.preventDefault();
    navigator.clipboard.writeText(copiedText);
    setCopiedText("");
    notify();
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="copyText"
          >
            Enter Text to Copy
          </label>
          <input
            type="text"
            value={copiedText}
            onChange={(e) => setCopiedText(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type something..."
          />
        </div>
        <button
          onClick={copyToClipBoard}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Copy Text
        </button>
        <textarea
          id="textarea"
          placeholder="CTRL + V"
          className="mt-4 w-full border rounded p-2 text-gray-700"
        ></textarea>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Copy;
