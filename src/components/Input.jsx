import React from 'react';

function Input({ placeholder, type, value, id, label, onChange, name }) {
  return (
    <section className="container-fluid">
      <div className="input-wrapper" role="search">
        <div className="ssb-input">
          <div className="input-wrapper">
            <input
              type="text"
              className="ssb-input"
              label={label}
              name={name}
              placeholder={placeholder}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Input;
