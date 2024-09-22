import React from 'react';

const SubmitButton = ({ onClick }) => {
  return (
    <div onClick={onClick} className="btn-primary-submit">
      Да
    </div>
  );
};

export default SubmitButton;
