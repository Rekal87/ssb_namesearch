import React from 'react';

function Button({ negative, children, title, primary }) {
  return (
    <>
      <button
        type="button"
        primary={true}
        className="ssb-btn negative secondary-btn"
      >
        {title}
      </button>
      {children}
    </>
  );
}

export default Button;
