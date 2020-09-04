import React from 'react';
import { notification } from 'antd';

const openNotification = (type, message) => {
  const objMessage = {
    'success': "Thành công",
    'info': "Thông báo",
    'warning': "Chú ý",
    'error': "Thông báo lỗi"
  };

  notification[type]({
    message: objMessage[type],
    description: message,
    duration: 2,
    className: `notification-${type}`,
    placement: 'bottomRight',
  });
};

export default openNotification;