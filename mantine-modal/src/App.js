import React, { useState } from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Modal, Button, Group } from '@mantine/core';

const App = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} title="Authentication">
        Hi, Mom!
      </Modal>

      <div className="flex justify-center items-center h-screen">
        <Button onClick={open} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Open modal
        </Button>
      </div>
    </>
  );
};

export default App;
