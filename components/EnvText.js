import React, { useContext } from 'react';
import { EnvContext } from '../context/EnvContext';  // 假设你已经设置了这样一个 Context

const EnvText = ({ envKey }) => {
  const env = useContext(EnvContext);
  return <span>{env[envKey]}</span>;

};

export default EnvText;
