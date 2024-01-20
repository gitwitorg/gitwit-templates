import React from 'react'
import * as ContextMenu from '@radix-ui/react-context-menu'

export default function App() {
  return (
    <div className="flex justify-center items-center h-screen">
        <ContextMenu.Root>
          <ContextMenu.Trigger className="font-semibold">
           Right-click me! 🙂
          </ContextMenu.Trigger>
          <ContextMenu.Content className="bg-white border border-gray-200 rounded shadow-md">
            <ContextMenu.Item onSelect={() => console.log('Cut')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Cut
            </ContextMenu.Item>
            <ContextMenu.Item onSelect={() => console.log('Copy')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Copy
            </ContextMenu.Item>
            <ContextMenu.Item onSelect={() => console.log('Paste')} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
              Paste
            </ContextMenu.Item>
          </ContextMenu.Content>
        </ContextMenu.Root>
    </div>
  )
}