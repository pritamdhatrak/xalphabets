import React, { useState } from "react";

const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function App() {
  const [text, setText] = useState("");

  const handleClick = (char) => {
    setText((prev) => prev + char);
  };

  const handleBackspace = () => {
    setText((prev) => prev.slice(0, -1));
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Alphabet Buttons</h2>
      <p style={{ textAlign: "center", fontSize: "0.9rem", marginTop: "-1rem", marginBottom: "1rem" }}>
        Click letters (or use your keyboard) to build text.
      </p>
      <div style={{ maxWidth: "600px", margin: "0 auto", background: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 0 10px #ccc" }}>
        <div
          className="output"
          data-testid="output"
          style={{
            width: "100%",
            minHeight: "2rem",
            padding: "0.5rem",
            fontSize: "1rem",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginBottom: "1rem",
            boxSizing: "border-box",
            color: text ? "black" : "#999",
            backgroundColor: "white",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            userSelect: "text"
          }}
          aria-label="output"
        >
          {text.length > 0 ? text : "Your text will appear here..."}
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "1rem" }}>
          <button
            className="key"
            onClick={handleBackspace}
            data-testid="backspace"
            style={{ padding: "0.3rem 0.8rem", fontSize: "0.9rem", cursor: "pointer" }}
          >
            Backspace
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(13, 1fr)", gap: "0.5rem" }}>
          {alphabets.map((char) => (
            <button
              key={char}
              className="key"
              onClick={() => handleClick(char)}
              data-testid={`key-${char}`}
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
            >
              {char}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
