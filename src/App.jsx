import { useState, useEffect } from "react";

import "./App.css";

const KEY = "4g23RSCL1MEPDiQ8jwNl";
const API_URL = "https://the-one-api.dev/v2";

function App() {
  useEffect(() => {
    async function fetchBooks() {
      const endpoint = "movie";

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

        console.log(data);
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchBooks();
  }, []);

  return (
    <>
      <h1>hey</h1>
    </>
  );
}

export default App;
