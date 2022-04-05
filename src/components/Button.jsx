import React from 'react';

function Button({ negative, children, title }) {
  return (
    <>
      <button type="button" className="ssb-btn negative secondary-btn">
        {title}
      </button>
      {children}
    </>
  );
}

export default Button;
