import axios from "axios";
import promptHandler from "./promptHandler";

// Define your Gemini AI API endpoint

// Hardcoded API key
const GeminiApiKey = "AIzaSyBuNtzE8VwOnfTyHG8GkcaYsm2gisI1d84"; // Replace with hiding

const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GeminiApiKey}`;

// Call Gemini AI with the provided input text
const geminiAIHandler = async (inputText, termNum) => {
  let formattedPrompt = await promptHandler(inputText, termNum);

  const data = {
    contents: [
      {
        parts: [
          {
            text: formattedPrompt,
          },
        ],
      },
    ],
  };

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await axios.post(url, data, config);
    console.log(response.data); // Output the response from the API
    return response.data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error calling Gemini AI:", error);
    throw error; // Propagate the error to be handled by the calling component
  }
};

// Export the function
export default geminiAIHandler;
