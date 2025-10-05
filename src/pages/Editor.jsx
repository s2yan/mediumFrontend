import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { HeadingNode } from "@lexical/rich-text"
import ToolBar from "./ToolBar";
import { AutoLinkNode, LinkNode } from "@lexical/link";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { AutoLinkPlugin, createLinkMatcherWithRegExp } from "@lexical/react/LexicalAutoLinkPlugin";
import { ClickableLinkPlugin } from '@lexical/react/LexicalClickableLinkPlugin';
import { ImageNode } from "../constants/ImageNode";
import { ImagePlugin } from "../Plugins/ImagePlugin";
import { LexicalErrorBoundary } from "@lexical/react/LexicalErrorBoundary"

const theme = {
  text: {
    bold: "font-bold",
    italic: "italic",
    underline: "underline",
    strikethrough: "line-through"
  },
  link: "text-orange-600 hover:text-orange-800 underline transition-colors cursor-pointer"
};

function onError(error) {
  console.error(error);
}


const urlRegExp = new RegExp(
   /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/,
);

export function validateUrl(url) {
   return url === 'https://' || urlRegExp.test(url);
}

const URL_REGEX =
   /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;


const MATCHERS = [
  createLinkMatcherWithRegExp(URL_REGEX, (text) => {
    return text
  })
]



export default function Editor() {
  const initialConfig = {
    namespace: "MyEditor",
    theme,
    onError,
    nodes: [HeadingNode, LinkNode, AutoLinkNode, ImageNode]
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
        ErrorBoundary={ LexicalErrorBoundary }
      />
      <LinkPlugin validateUrl={ validateUrl }/>
      <AutoLinkPlugin matchers={ MATCHERS } />
      <ClickableLinkPlugin />
      <ImagePlugin />
      <HistoryPlugin />
    </LexicalComposer>
  );
}
