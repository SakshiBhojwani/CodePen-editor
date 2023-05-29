import React from 'react'
import { isBrowser } from "browser-or-node";
if (isBrowser) {
  require("codemirror/lib/codemirror.css");
  require("codemirror/theme/material.css");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/javascript/javascript");
  require("codemirror/mode/css/css");
}
import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {
    const {language,displayName,value,onChange}=props
    
    function handleChange(editor,data,value) { 
        onChange(value)
     }
  
    return (
    <div className='editor-container'>
        <div className='editor-title'>
            {displayName}
            <button>O/C</button>
        </div>
        <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className='code-mirror-wrapper'
        options={{
            lineWrapping:true,
            lint:true,
            mode: language,
            theme:"material",
            lineNumbers:true,
           
        }}
        />
    </div>
  )
}
