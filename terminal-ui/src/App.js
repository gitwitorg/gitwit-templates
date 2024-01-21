import { React, useState } from 'react';
import Terminal, { ColorMode, TerminalOutput } from 'react-terminal-ui';

const TerminalController = (props = {}) => {
  const [terminalLineData, setTerminalLineData] = useState([
    <TerminalOutput>Last login: Sat Jan 20 16:40:12</TerminalOutput>
  ]);

  const handleCommand = async (input) => {
    const command = input.split(' ')[0];
    const args = input.split(' ').slice(1);
    setTerminalLineData((prevState) => [
      ...prevState,
      <TerminalOutput>Command not found. Type 'help' for a list of available commands.</TerminalOutput>,
    ]);
  };

  return (
    <div className="container">
      <Terminal name='Terminal' colorMode={ ColorMode.Dark }  onInput={ handleCommand }>
        { terminalLineData }
      </Terminal>
    </div>
  )
};

export default TerminalController;