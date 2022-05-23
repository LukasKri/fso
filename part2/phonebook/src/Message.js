import React from "react";

const Message = ({ type, message }) => {
  return <div className={`message ${type}`}>{message}</div>;
};

export default Message;
