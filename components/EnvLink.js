import React, { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';  // 假设你已经设置了这样一个 Context

const EnvLink = ({ envKey, children }) => {
  const env = useContext(EnvContext);
  return <a href={env[envKey]} style={{ textDecoration: 'underline', color: 'blue' }}>{children}</a>;

};

export default EnvLink;
