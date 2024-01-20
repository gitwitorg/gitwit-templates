import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

export default function App() {
  return (
    <div className="m-4">
        <div className="bg-gray-800 rounded-lg p-4 w-full">
          <SyntaxHighlighter language="javascript" style={atomOneDark}>
            {`import React from 'react'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
        <h1 className="font-semibold">
          Welcome to my app!
        </h1>
    </div>
  )
}`}
          </SyntaxHighlighter>
        </div>
    </div>
  )
}
