import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { buttonElements } from "../constants/ToolabarConstants.jsx";
import { FORMAT_ELEMENT_COMMAND, FORMAT_TEXT_COMMAND, UNDO_COMMAND, REDO_COMMAND } from "lexical";
import { cloneElement } from "react";


export default function ToolBar(){

    const [ editor ] = useLexicalComposerContext()

    const onClickAction = (id) => {
        
        switch(id){
            case "bold":
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
                break;

            case "italic":
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
                break;

            case "underline":
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")
                break;

            case "strikeThrough":
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")
                break;

            case "code":
                editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")
                break;

            case "undo":
                editor.dispatchCommand(UNDO_COMMAND, undefined)
                break;

            case "redo":
                editor.dispatchCommand(REDO_COMMAND, undefined)
                break;
            
            case "center":
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
                break;

            case "left":
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")
                break;

            case "right":
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")
                break;
            
            case "justify":
                editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")
                break;
        }
    }

    return (
        <>
            { buttonElements.map( (type) => (
               <button 
                aria-label={ type.label } 
                key={type.id} 
                onClick = { () => onClickAction(type.id) }
                className="px-2 py-4 font-bold text-xl">{ type.icon }</button> 
            ))}
        </>
    )
}