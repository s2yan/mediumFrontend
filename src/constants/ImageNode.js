import { DecoratorNode} from "lexical";
import React from "react";


class ImageNode extends DecoratorNode{

    constructor(src, key){
        super(key)
        this.__src = src
    }

    static clone(){
        return new ImageNode(this.__src, this.__key)
    }

    static getType(){
        return "img"
    }

    //this will not be used as this class extends the decorateNode not the elementNode
    createDOM(){
        const image = document.createElement('img');
        image.setAttribute('src', this.__src)

        return image
    }

    decorate(){
        return React.createElement('img', {
            src : this.__src
           })
        
    }

    updateDOM(){
        return false
    }
    
    static importJSON(serializedNode){
        return new ImageNode(serializedNode.src)
    }

    exportJSON(){
        return{
            type: 'image',
            version: 1,
            src : this.__Src
        }
    }
    
}

export { ImageNode }