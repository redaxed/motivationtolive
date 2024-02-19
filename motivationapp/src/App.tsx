import React, { useEffect, useState } from 'react';
import './App.css';

function App() {

const [quote, setQuote] = useState('Loading...');
  const fetchQuote = async () => {
    const response = await fetch('/api/quotes');
    const data = await response.json();
    setQuote(data.quote);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
      {"<3"}
      <code>{quote}</code>
      </header>
    </div>
  );
}

export default App;
