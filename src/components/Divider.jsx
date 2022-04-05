import React from 'react';

function Divider({ className, dark, light }) {
  return (
    <div className="d-flex component-wrapper">
      <hr className="ssb-divider type-light" aria-hidden="true" />
    </div>
  );
}

export default Divider;
