import { DatePicker, Radio, Space } from 'antd';
import React, { useState } from 'react';
import 'antd/dist/antd.css';

const { RangePicker } = DatePicker;

const App = () => {
  return (
    <div className="m-10">
      <RangePicker />
    </div>
  );
};

export default App;