import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { $createHeadingNode, HeadingNode } from "@lexical/rich-text"
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $getRoot , $createTextNode, $getSelection, $isRangeSelection } from "lexical";
import { $setBlocksType } from "@lexical/selection"
import ToolBar from "./ToolBar";


const theme = {
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through"
  }
};

function onError(error) {
  console.error(error);
}



export default function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode]
  };

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <ToolBar />
      <RichTextPlugin
        contentEditable={
          <ContentEditable
            className="w-full h-96 border border-orange-400 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-orange-300 overflow-y-auto relative my-5"
          />
        }
        placeholder={
          <div className="absolute top-34 text-gray-400 pointer-events-none p-5">
            Tell your story...
          </div>
        }
      />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
