import { message, Popconfirm, Button } from 'antd';
import 'antd/dist/antd.css';

import React from 'react';
const confirm = (e) => {
  console.log(e);
  message.success('Click on Yes');
};
const cancel = (e) => {
  console.log(e);
  message.error('Click on No');
};
const App = () => (
  <div className="m-5">
    <Popconfirm
      title="Are you sure to delete this task?"
      onConfirm={confirm}
      onCancel={cancel}
      okText="Yes"
      cancelText="No"
      className="flex items-center justify-center"
    >
      <a href="#" className="flex items-center justify-center">
        <Button type="primary" danger>Primary Button</Button>
      </a>
    </Popconfirm>
    </div>
);
export default App;