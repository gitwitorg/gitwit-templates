import React, { useState } from 'react'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript.js';
import { Controlled as CodeMirror } from 'react-codemirror2';

export default function App() {
  const [code, setCode] = useState(`import React from 'react'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
        <h1 className="font-semibold">
          Welcome to my app!
        </h1>
    </div>
  )
}`);

  return (
    <div className="m-4">
      <div className="w-full">
        <CodeMirror
          value={code}
          options={{
            mode: 'javascript',
            theme: 'material',
            lineNumbers: true
          }}
          onBeforeChange={(editor, data, value) => {
            setCode(value);
          }}
        />
      </div>
    </div>
  )
}
