import React from "react";

const ErrorMessage = (props) => {
  return <div className={props.type}>{props.message}</div>;
};

export default ErrorMessage;
