import React, { useState } from 'react';

export default function App() {
  const [inputText, setInputText] = useState("");

  const corrections = {
    "teh": "the",
    "recieve": "receive",
    "adress": "address",
    "wierd": "weird",
    "thier": "their"
  };

  const getCorrectedText = (text) => {
    return text
      .split(" ")
      .map((word) => corrections[word] || word)
      .join(" ");
  };

  return (
    <div style={{ maxWidth: "500px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h2>AutoCorrect App</h2>
      <input
        type="text"
        placeholder="Type here..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        style={{ width: "100%", padding: "10px", fontSize: "16px" }}
      />
      <h3>Corrected Preview:</h3>
      <p>{getCorrectedText(inputText)}</p>
    </div>
  );
}
