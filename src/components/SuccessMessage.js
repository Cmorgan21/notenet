import React from "react";
import PropTypes from "prop-types";

const SuccessMessage = ({ message, type, onClose }) => {
  const messageStyle = type === "success" ? "bg-green-500" : "bg-red-500";

  return (
    <div className="fixed top-0 left-1/2 transform -translate-x-1/2 w-3/4 max-w-md p-4 rounded-lg shadow-lg bg-white text-center z-50 font-arimo">
      <div className={`${messageStyle} text-white p-4 rounded-lg mb-4`}>
        <p>{message}</p>
      </div>
    </div>
  );
};

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error"]).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SuccessMessage;
