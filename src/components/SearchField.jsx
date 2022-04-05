import React from 'react';
import Input from './Input';
import Button from './Button';

function SearchField() {
  return (
    <div>
      <div className="container">
        <div className="name-search">
          <div className="name-search-input">
            <div className="row">
              <div className="col-lg-12">
                <h2 className="ssb-title">Navnsøk</h2>
              </div>
              <div className="col-lg-12">
                <p>Hvor mange heter det samme som deg?</p>
              </div>
            </div>
            <form></form>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <label for="firstName">Skriv inn fornavn</label>
            <Input placeholder="Fornavn" label="firstName" />
          </div>
          <div class="col">
            <label for="lastName">Skriv inn etternavn</label>
            <Input placeholder="Etternavn" label="lastName" />
          </div>
          <Button title="Se resultatet" primary />
        </div>
      </div>
    </div>
  );
}

export default SearchField;
