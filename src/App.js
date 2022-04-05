import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import ResultFrame from './components/ResultFrame';
import SearchField from './components/SearchField';

function App() {
  return (
    <>
      <Header />
      <PageTitle />
      <SearchField />
      <ResultFrame />
      <Footer />
    </>
  );
}

export default App;
