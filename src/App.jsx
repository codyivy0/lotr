import { useState, useEffect } from "react";

import "./App.css";

const KEY = "4g23RSCL1MEPDiQ8jwNl";
const API_URL = "https://the-one-api.dev/v2";

function App() {
  const [quote, setQuote] = useState('')
  useEffect(() => {
    async function fetchBooks() {
      const endpoint = "quote";
      const randomNumber = Math.floor(Math.random() * 1000) + 1;

      const headers = {
        Authorization: `Bearer ${KEY}`,
        "Content-Type": "application/json",
      };

      try {
        const response = await fetch(`${API_URL}/${endpoint}`, {
          method: "GET",
          headers: headers,
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        setQuote(data.docs[randomNumber].dialog);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <h1>{quote} </h1>
    </>
  );
}

export default App;
