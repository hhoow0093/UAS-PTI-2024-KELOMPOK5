import React, { useState, useEffect } from "react";
import '../components/StyleAboutus1.css';

const apiURL = 'https://api.quotable.io/random';

function Aboutus() {
  const [quote, setQuote] = useState("Loading");
  const [author, setAuthor] = useState("Loading");

  async function getQuote() {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author');

    quoteElement.classList.add('fade-out');
    authorElement.classList.add('fade-out');
  
    const response = await fetch(apiURL);
    const data = await response.json();
  

    setTimeout(() => {
      quoteElement.classList.remove('fade-out');
      authorElement.classList.remove('fade-out');
    }, 500); 
  
    setQuote(data.content);
    setAuthor(data.author);
  }


  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-box fade-in">
      <a href="/aboutus2">X</a>
      <h2>Quote of The Day</h2>
      <blockquote id="quote">{quote}</blockquote>
      <span id="author">{author}</span>
      <div>
        <button onClick={getQuote}>New Quote</button>
      </div>
    </div>
  );
}

export default Aboutus;