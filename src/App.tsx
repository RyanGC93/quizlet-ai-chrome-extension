import { useState } from "react";
import "./App.css";

function App() {
  const [aiPrompt, setAiPrompt] = useState("");
  const [numTerms, setNumTerms] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("AI Prompt:", aiPrompt);
    console.log("Number of Terms:", numTerms);
  };

  return (
    <>
      <div></div>
      <h1>AI Generated Study Cards</h1>
      <div className="card">
        <h2>AI Prompt Form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <textarea
              id="aiPrompt"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="Enter your AI prompt"
              rows="5"
              cols="30"
              required
            />
          </div>

          <div>
            <label htmlFor="numTerms">Number of Terms:</label>
            <input
              type="number"
              id="numTerms"
              value={numTerms}
              onChange={(e) => setNumTerms(e.target.value)}
              placeholder="Enter number of terms"
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
