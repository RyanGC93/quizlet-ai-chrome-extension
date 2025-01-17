# Quizlet AI Study Card Generator - Chrome Extension

This Chrome extension allows users to generate Quizlet-style study cards using Gemini AI. It enables the creation of custom study cards based on a user-defined prompt and the number of terms.

## Features

- **AI-powered flashcard generation**: Use Gemini AI to generate study cards based on your prompt.
- **Customizable number of terms**: Define how many terms you'd like the study cards to contain.
- **User-friendly form**: Input your AI prompt and the number of terms directly into the extension popup.
- **Structured response**: Once the cards are generated, a structured response is shown, making it easy to copy the output for use in Quizlet.

## Technologies Used

- **React**: For building the user interface of the Chrome extension.
- **Gemini AI**: To generate the content for the study cards.
- **Axios**: To make HTTP requests to the Gemini AI API.
- **Chrome Extensions**: The extension is built as a Chrome Extension to be used directly in the browser.

## Installation

To install the extension locally for development:

1. Clone this repository:

   ```bash
   git clone https://github.com/YourUsername/quizlet-ai-chrome-extension.git
   ```

2. Navigate to the Chrome Extensions page:

   - Open Chrome and go to `chrome://extensions/`
   - Enable **Developer mode** (toggle at the top right)
   - Click **Load unpacked**
   - Select the `quizlet-ai-chrome-extension` folder from the repository

3. The extension will now be installed in your browser.

## Usage

1. Once installed, you will see the extension icon in the top-right corner of your browser.
2. Click on the extension icon to open the popup window.
3. In the popup, you will see the following form:
   - **AI Prompt**: Input a subject or topic for the study cards (e.g., "AI development").
   - **Number of Terms**: Specify how many terms you want the AI to generate.
4. Once you submit the form, the AI will generate the study cards based on the prompt and the number of terms.
5. The structured response will be displayed in a `textarea` where you can copy the content directly to use in Quizlet.

## Example

### Input:

- **AI Prompt**: "Explain the basics of Machine Learning"
- **Number of Terms**: 10

### Output (Structured Response):

```
Term 1: Machine Learning	Definition: A type of AI that enables systems to learn and improve from experience.
Term 2: Supervised Learning	Definition: A type of machine learning where models are trained on labeled data.
...
```

You can easily copy this structured response into Quizlet to create your own study set!

## Contributing

Contributions are welcome! If you find a bug or have an idea for a new feature, feel free to fork this repository and submit a pull request.

### Steps to contribute:

1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes and commit them (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


