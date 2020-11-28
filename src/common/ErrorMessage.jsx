import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>
        {error}, Please try again after sometime.
      </h4>
    </div>
  );
};

export default ErrorMessage;
