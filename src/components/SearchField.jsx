import React, { useState, useEffect } from 'react';
import Input from './Input';
import data from './../nameSearchPop300.json';
import Divider from './Divider';

function SearchField() {
  const [dataSet] = useState(data.response.docs);
  const [searchFirstName, setSearchFirstName] = useState('');
  const [searchLastName, setSearchLastName] = useState('');
  const [person, setPerson] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (d) => {
    d.preventDefault();
    const { firstnameInput, lastnameInput } = d.target;
    const firstname = firstnameInput.value;
    const lastname = lastnameInput.value;

    let res;

    /* Setup also for some conditional rendering */

    /* if firstname and lastname is search for */
    if (firstname && lastname) {
      res = dataSet.find(
        (person) =>
          person?.firstname === firstname.toUpperCase() &&
          person?.lastname === lastname.toUpperCase()
      );
    }

    /* if only firstname is searched for */
    if (firstname && !lastname) {
      res = dataSet.find(
        (person) => person?.firstname === firstname.toUpperCase()
      );
    }

    /* if the lastname is searched for and no firstname */
    if (!firstname && lastname) {
      res = dataSet.find(
        (person) => person?.lastname === lastname.toUpperCase()
      );
    }

    setSearchFirstName(firstname);
    setSearchLastName(lastname);
    setPerson(res);

    /* changing the result screen to be rendered conditonally */
    setIsSubmitted(true);
  };

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

            <div className="row">
              <div className="col-md-8">
                {/* To stop a onChange error, swapped to form onSubmit */}
                <form onSubmit={(e) => handleSubmit(e)}>
                  <div className="col name-search-input">
                    <label htmlFor="firstName">Skriv inn fornavn:</label>
                    <Input
                      type="text"
                      placeholder="Fornavn"
                      label="firstName"
                      name="firstnameInput"
                    />
                  </div>
                  <div className="col name-search-input">
                    <label htmlFor="lastName">Skriv inn etternavn:</label>
                    <Input
                      type="text"
                      placeholder="Etternavn"
                      label="lastName"
                      name="lastnameInput"
                    />
                  </div>
                  <button
                    className="ssb-btn primary-btn name-search-btn"
                    type="submit"
                  >
                    Se resultatet
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {isSubmitted && person?.count > 3 && (
            <section className="result-section">
              <h2>Resultat</h2>
              <Divider />
              <p>
                Det er <strong>{person.count}</strong> andre som har{' '}
                {searchFirstName && person.firstname && (
                  <>
                    <strong>{person.firstname}</strong> som sitt første fornavn
                  </>
                )}
                {searchLastName && (
                  <>
                    <strong>{person.lastname}</strong> som sitt etternavn
                  </>
                )}
              </p>
            </section>
          )}

          {isSubmitted && (!person || person?.count <= 3) && (
            <section className="result-section">
              <h2>Resultat</h2>
              <Divider />
              <p>
                {searchFirstName && searchLastName && (
                  <>
                    Det er <strong>0-3</strong> andre som kombinasjonen av{' '}
                    {searchFirstName} som fornavn og {searchLastName} som
                    etternavn
                  </>
                )}
                {searchFirstName && !searchLastName && (
                  <>
                    Det er <strong>0-3</strong> andre som har {searchFirstName}{' '}
                    som fornavn
                  </>
                )}
                {!searchFirstName && searchLastName && (
                  <>
                    Det er <strong>0-3</strong> andre som har {searchLastName}{' '}
                    som etternavn
                  </>
                )}
              </p>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchField;
