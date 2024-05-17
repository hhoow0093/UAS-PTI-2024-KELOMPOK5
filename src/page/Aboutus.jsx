import React, { useState, useEffect } from "react";
import '../components/StyleAboutus1.css';

const apiURL = 'https://api.quotable.io/random';

function Aboutus() {
  const [quote, setQuote] = useState("Loading");
  const [author, setAuthor] = useState("Loading");

  async function getQuote() {
    const response = await fetch(apiURL);
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  }

  // Fetch the initial quote
  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-box">
      <a href="/aboutus2">X</a>
      <h2>Quote of The Day</h2>
      <blockquote id="quote">{quote}</blockquote>
      <span id="author">{author}</span>
      <div>
        <button onClick={getQuote}>New Quote</button>
      </div>
      <a2 href="https://api.quotable.io/random">SOURCE</a2>
    </div>
  );
}

export default Aboutus;