import React from 'react';

function Input({ placeholder, type, value, id, searchField, label }) {
  return (
    <section className="container-fluid">
      <div className="input-wrapper" role="search">
        <div className="ssb-input">
          <div class="input-wrapper">
            <input
              type="text"
              className="ssb-input"
              label={label}
              placeholder={placeholder}
              value={value}
              searchField={true}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Input;
