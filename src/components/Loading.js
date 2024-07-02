import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Spinner animation="border" role="status" className="h-20 w-20">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
