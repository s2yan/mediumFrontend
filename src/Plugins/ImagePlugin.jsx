import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { createCommand } from "lexical";
import { useEffect } from "react";
import { $insertNodes } from "lexical";
import { COMMAND_PRIORITY_LOW } from "lexical";
import { ImageNode } from "../constants/ImageNode.js"

export const INSERT_IMAGE_COMMAND = createCommand()

function ImagePlugin(){

    const [ editor ] = useLexicalComposerContext()

    useEffect(() => {
        editor.registerCommand(INSERT_IMAGE_COMMAND, (payload) => {
            editor.update( () => {
                const imageNode = new ImageNode(payload)
                $insertNodes([imageNode])
            })
            return true  
        },
            COMMAND_PRIORITY_LOW
        )

    }, [editor])

    return null
}

export { ImagePlugin }