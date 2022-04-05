import React from 'react';

function PageTitle() {
  return (
    <div className="container">
      <div className="ssb-breadcrumbs">
        <div>
          <a className="ssb-link" href=" ">
            <span className="link-text">breadcrumb 1</span>
          </a>
          &nbsp;/&nbsp;
        </div>
        <div>
          <a className="ssb-link" href=" ">
            <span className="link-text">breadcrumb 2</span>
          </a>
          &nbsp;/&nbsp;
        </div>
        <span>Navn</span>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="ssb-title">Navn</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageTitle;
