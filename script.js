var { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
var openai = new OpenAIApi(configuration);

async function askPrompt(prompt) {
  console.log("Waiting for response");
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
    temperature: 0,
    max_tokens: 2000,
  });
  console.log("Response received\n");
  return response.data.choices[0].message.content;
}

async function fetchAskPrompt(prompt) {
  let response = await askPrompt(prompt);
  console.log(response);
}

function convertToPrompt(inputText) {
  // Splitting the input text by newlines
  const lines = inputText.split("\n");

  // Finding the index of "Group of answer choices"
  const choicesIndex = lines.findIndex(
    (line) => line.trim() === "Group of answer choices"
  );

  // Extracting the question
  const question = lines.slice(0, choicesIndex).join("\n").trim();

  // Extracting the choices
  const choices = lines
    .slice(choicesIndex + 1)
    .map((line) => line.trim())
    .filter((line) => line !== "");

  // Creating the choices array variable
  const choicesArray = choices.map(
    (choice, index) => `${index + 1}: ${choice}`
  );

  let prompt = `Select the correct answer:\n`;
  prompt += `Question: ${question}`;
  prompt += "\nChoices:\n";
  prompt += choicesArray.join("\n");

  return prompt;
}

let inputText = `Why should you avoid copying the values of props into a component's state?
Group of answer choices

Because prop values cannot be stored in state

Because you should never mutate state

Because that would create two instances of the same state that could become out of sync

Because you want to allow data to flow back up to the parent`;
let prompt = convertToPrompt(inputText);
fetchAskPrompt(prompt);
