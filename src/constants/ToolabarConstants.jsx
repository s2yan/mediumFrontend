import { 
    MdOutlineCode, 
    MdOutlineFormatItalic, 
    MdOutlineFormatBold, 
    MdOutlineFormatUnderlined, 
    MdOutlineFormatStrikethrough,
    MdOutlineRedo,
    MdOutlineUndo,
    MdOutlineFormatAlignCenter, 
    MdOutlineFormatAlignLeft,
    MdOutlineFormatAlignRight,
    MdOutlineFormatAlignJustify

} from "react-icons/md";


// Create a object called button-type that will have the type of button
// const buttonType = [
//     "bold",
//     "italic",
//     "underline",
//     "strike-through",
//     "code",
//     "redo",
//     "undo",
//     "center",
//     "left",
//     "right",
//     "justify"
// ]

//Create a button object that will contain arrays based out of the buton type that will have icons and 
// label for the buttons


const buttonElements = [
    { id: "bold", label: "bold", icon: <MdOutlineFormatBold /> },
    { id: "italic", label: "italic", icon: <MdOutlineFormatItalic />},
    { id: "underline", label: "underline", icon: <MdOutlineFormatUnderlined />},
    { id: "strikeThrough", label: "strikeThrough", icon: <MdOutlineFormatStrikethrough />},
    { id: "code", label: "code", icon: <MdOutlineCode />},
    { id: "redo", label: "redo", icon: <MdOutlineRedo />},
    { id: "undo", label: "undo", icon: <MdOutlineUndo />},
    { id: "center", label: "center", icon: <MdOutlineFormatAlignCenter />},
    { id: "left", label: "left", icon: <MdOutlineFormatAlignLeft />},
    { id: "right", label: "right", icon: <MdOutlineFormatAlignRight />},
    { id: "justify", label: "justify", icon: <MdOutlineFormatAlignJustify /> }
] 


export { buttonElements }