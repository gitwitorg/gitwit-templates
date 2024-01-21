import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <div className="m-4">
      <Button onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Sock Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};
export default App;
