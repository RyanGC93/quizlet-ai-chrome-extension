import { useState, ChangeEvent, FormEvent, useRef } from "react";
import "./App.css";
import geminiAiHandler from "./geminiAIHandler";

const App = () => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null); // Explicitly typing the ref

  const [aiPrompt, setAiPrompt] = useState<string>("");
  const [numTerms, setNumTerms] = useState<string>("");
  const [structuredResponse, setStructuredResponse] = useState<string>("");

  // Define types for the event handlers
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Call the geminiAiHandler to get the response
    let response = await geminiAiHandler(aiPrompt, numTerms);
    console.log("AI Prompt:", aiPrompt);
    console.log("Number of Terms:", numTerms);
    console.log(response);

    // Set the structured response into the state
    setStructuredResponse(response);
  };

  const handleAiPromptChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAiPrompt(e.target.value);
  };

  const handleNumTermsChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumTerms(e.target.value);
  };

  const handleCopy = () => {
    if (textareaRef.current) {
      textareaRef.current.select(); // Select the content in the textarea
      document.execCommand("copy"); // Copy the selected content
    }
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
              onChange={handleAiPromptChange}
              placeholder="Enter a detailed description of the study cards you want to generate, including key topics, formats, and any specific content requirements. The more specific and thorough your input, the better the AI-generated study cards will align with your needs."
              rows={7}
              cols={50}
              required
            />
          </div>

          <div>
            <label htmlFor="numTerms">Number of Study Cards:</label>
          </div>
          <div>
            <input
              type="number"
              id="numTerms"
              value={numTerms}
              onChange={handleNumTermsChange}
              placeholder="Enter number"
              required
            />
          </div>

          <button type="submit">Submit</button>
        </form>
        <hr />

        <div>
          <h3>Formatted Study Cards:</h3>
          <textarea
            value={structuredResponse} // Populate the textarea with the response
            readOnly // Make it read-only so the user can't edit it
            rows={10}
            cols={50}
          />
        </div>
        <div>
          <button onClick={handleCopy}>Copy to Clipboard</button>
          <p> Just copy and paste into Quizlet </p>
          <p>
            {" "}
            (The settings in Quizlet need to be seperated by a tab and a new
            line){" "}
          </p>
          </div>
      </div>
    </>
  );
};

export default App;
