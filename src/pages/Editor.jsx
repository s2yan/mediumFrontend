import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";

const theme = {};

function onError(error) {
  console.error(error);
}

export default function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="w-full h-96 border border-orange-400 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 overflow-y-auto relative"
          />
        }
        placeholder={
          <div className="absolute top-16 text-gray-400 pointer-events-none p-5">
            Tell your story...
          </div>
        }
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
