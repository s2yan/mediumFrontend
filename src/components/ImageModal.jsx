import React, { useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext"; 
import { INSERT_IMAGE_COMMAND } from "../Plugins/ImagePlugin";

export const ImageModal = ({ url, setURL, setShowImageInput }) => {
  const [editor] = useLexicalComposerContext();
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [showFileInput, setShowFileInput] = useState(false);

  const handleLocalFileUpload = (file) => {
    const localUrl = URL.createObjectURL(file);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, localUrl);
    setShowImageInput(false);
    setShowFileInput(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-100 bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
        <h2 className="text-xl font-semibold text-center text-orange-600">Insert Image</h2>

        <div className="flex justify-center space-x-4">
          <button
            className="bg-orange-500 px-4 py-2 font-bold text-white rounded hover:bg-orange-600"
            onClick={() => setShowUrlInput(true)}
          >
            URL
          </button>
          <button
            className="bg-orange-500 px-4 py-2 font-bold text-white rounded hover:bg-orange-600"
            onClick={() => setShowFileInput(true)}
          >
            File
          </button>
        </div>

        {showUrlInput && (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!url) return;
              editor.dispatchCommand(INSERT_IMAGE_COMMAND, url);
              setShowImageInput(false);
              setShowUrlInput(false);
            }}
            className="space-y-2"
          >
            <input
              type="url"
              name="url"
              value={url}
              onChange={(e) => setURL(e.target.value)}
              placeholder="Enter image URL"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-300"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              Insert Image
            </button>
          </form>
        )}

        {showFileInput && (
          <div className="space-y-2">
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                if (file) {
                  handleLocalFileUpload(file);
                }
              }}
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        )}
      </div>
    </div>
  );
};
