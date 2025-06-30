import React, { useEffect, useState } from "react";

const QuoteGenerator = () => {
  const [quote, setQuote] = useState({ content: "", author: "" });

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      setQuote({ content: data.content, author: data.author });
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); // fetch initially
    const intervalId = setInterval(fetchQuote, 30000); // fetch every 30s

    return () => clearInterval(intervalId); // cleanup
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.quoteBox}>
        <p style={styles.content}>"{quote.content}"</p>
        <p style={styles.author}>— {quote.author}</p>
        <button style={styles.button} onClick={fetchQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
};

// Inline styles for simplicity
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "#f5f5f5",
  },
  quoteBox: {
    padding: "2rem",
    border: "2px solid #333",
    borderRadius: "8px",
    background: "#fff",
    maxWidth: "600px",
    textAlign: "center",
  },
  content: {
    fontSize: "1.5rem",
    marginBottom: "1rem",
  },
  author: {
    fontStyle: "italic",
    color: "#666",
    marginBottom: "1.5rem",
  },
  button: {
    padding: "0.5rem 1rem",
    fontSize: "1rem",
    cursor: "pointer",
    borderRadius: "4px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
  },
};

export default QuoteGenerator;
