import { useState } from "react";
import "./App.css";
import geminiAiHandler from "./geminiAIHandler";

function App() {
  const [aiPrompt, setAiPrompt] = useState("");
  const [numTerms, setNumTerms] = useState("");
  const [structuredResponse, setStructuredResponse] = useState(""); // State to hold the structured response

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Call the geminiAiHandler to get the response
    let response = await geminiAiHandler(aiPrompt, numTerms);
    console.log("AI Prompt:", aiPrompt);
    console.log("Number of Terms:", numTerms);
    console.log(response);

    // Set the structured response into the state
    setStructuredResponse(response);
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

        <div>
          <h3>Structured Response:</h3>
          <textarea
            value={structuredResponse} // Populate the textarea with the response
            readOnly // Make it read-only so the user can't edit it
            rows="10"
            cols="50"
          />
          <p> Just copy and paste into Quizlet </p>
        </div>
      </div>
    </>
  );
}

export default App;
