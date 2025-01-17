export default function promptHandler(inputText, termNum) {
  return `
      create a flashcard set for ai development. The format should be on one line for each card with the word first and then separated by a tab, followed by the definition. I want ${termNum} word/definitions.
      
      The subject is ${inputText}.
      Return only the term/definitions
    `;
}
