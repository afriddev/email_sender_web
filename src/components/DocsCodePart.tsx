/* eslint-disable @typescript-eslint/no-explicit-any */
import { AiOutlineCopy } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { useState, useEffect } from "react";

export default function CodePart({ codeObj }: { codeObj: any }) {
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    if (isCopied) {
      const timer = setTimeout(() => {
        setIsCopied(false);
      }, 1500); // Reset copied state after 1.5 seconds
      return () => clearTimeout(timer);
    }
  }, [isCopied]);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(codeObj.install1);
    setIsCopied(true);
  };

  return (
    <div className="mb-4 lg:ml-0 border rounded border-gray-400">
      <div className="bg-gray-100 py-3  rounded-md text-gray-800 px-3 text-sm flex items-center justify-between lg:text-lg">
        <span className="font-mono">{codeObj.install1}</span>
        <button
          onClick={handleCopyToClipboard}
          className={`ml-4 focus:outline-none transition duration-200 ease-in-out ${
            isCopied ? "text-green-500" : "text-gray-600 hover:text-indigo-500"
          }`}
          aria-label="Copy to clipboard"
        >
          {isCopied ? (
            <MdDone className="text-xl" />
          ) : (
            <AiOutlineCopy className="text-xl" />
          )}
        </button>
      </div>
    </div>
  );
}
