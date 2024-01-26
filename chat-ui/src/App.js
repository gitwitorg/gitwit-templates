import React from 'react'
import { FaUserCircle } from 'react-icons/fa'

const chatData = [
  {
    user: 'Me',
    message: 'Hello!'
  },
  {
    user: 'You',
    message: 'Hi there!'
  },
  {
    user: 'Me',
    message: 'How are you?'
  },
  {
    user: 'You',
    message: "I'm good, thanks!"
  }
];

const ChatBubble = ({ user, message, isRight }) => {
  return (
    <div className={`flex justify-${isRight ? 'end' : 'start'}`}>
      <div className={`bg-${isRight ? 'blue' : 'gray'}-500 text-white rounded-lg py-2 px-4`}>
        {message}
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-gray-800 text-white flex justify-between items-center p-4">
        <h1 className="font-semibold text-lg">Chat App</h1>
        <FaUserCircle className="text-2xl" />
      </div>
      <div className="flex-1 overflow-y-scroll p-4">
        <div className="flex flex-col space-y-2">
          {chatData.map((chat, index) => (
            <ChatBubble
              key={index}
              user={chat.user}
              message={chat.message}
              isRight={chat.user === 'Me'}
            />
          ))}
        </div>
      </div>
      <div className="bg-gray-800 text-white p-4">
        <div className="flex items-center">
          <input type="text" placeholder="Type your message here" className="flex-1 bg-gray-700 rounded-lg py-2 px-4 text-white" />
          <button className="bg-blue-500 rounded-lg py-2 px-4 ml-2">Send</button>
        </div>
      </div>
    </div>
  )
}