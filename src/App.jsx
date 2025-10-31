import React, { useState, useEffect } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [text, setText] = useState("");

  // Handle alphabet button click
  const handleAlphabetClick = (char) => {
    setText((prev) => prev + char);
  };

  // Handle backspace button click
  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  // Optional: handle physical keyboard input for alphabets and backspace
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toUpperCase();
      if (alphabets.includes(key)) {
        setText((prev) => prev + key);
      } else if (event.key === "Backspace") {
        setText((prev) => prev.slice(0, -1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="container" style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Alphabet Buttons</h2>
      <p style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "-1rem", marginBottom: "1rem" }}>
        Click letters (or use your keyboard) to build text.
      </p>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 0 10px #ccc" }}>
        <input
          type="text"
          className="output"
          placeholder="Your text will appear here..."
          value={text}
          readOnly
          style={{
            width: "100%",
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            boxSizing: "border-box",
            color: "black",
            backgroundColor: "white"
          }}
          data-testid="output"
        />
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <button
            className="key"
            onClick={handleBackspace}
            style={{ padding: "0.3rem 0.8rem", fontSize: "0.9rem", cursor: "pointer" }}
            data-testid="backspace"
          >
            Backspace
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: "0.5rem" }}>
          {alphabets.map((char) => (
            <button
              key={char}
              className="key"
              onClick={() => handleAlphabetClick(char)}
              style={{
                padding: "0.5rem",
                fontWeight: "bold",
                cursor: "pointer",
                borderRadius: "4px",
                border: "1px solid #ccc",
                backgroundColor: "#fff",
                userSelect: "none",
                color: "black"
              }}
              data-testid={`key-${char}`}
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
