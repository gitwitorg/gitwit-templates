import { Button, notification } from 'antd';
import React from 'react';
import 'antd/dist/antd.css';

const openNotification = () => {
  notification.open({
    message: 'Notification Title',
    description:
      'This is the content of the notification. This is the content of the notification.',
    onClick: () => {
      console.log('Notification Clicked!');
    },
  });
};

const CenteredButton = ({ onClick, children }) => (
  <div className="flex justify-center items-center h-screen">
    <Button type="primary" onClick={onClick}>
      {children}
    </Button>
  </div>
);

const App = () => (
  <div className="bg-gray-100 min-h-screen">
    <CenteredButton onClick={openNotification}>
      Notify me
    </CenteredButton>
  </div>
);

export default App;