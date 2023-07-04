import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

var { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
var openai = new OpenAIApi(configuration);

export default function Home() {
  const [textareaValue, setTextareaValue] = useState("");

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const sendRequest = async (prompt) => {
    const response = await fetch("/api/askPrompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(prompt),
    });

    if (response.ok) {
      const responseString = await response.json();
      return responseString.message;
    } else {
      console.error("Request failed.");
    }
  };

  function convertToPrompt(inputText) {
    const lines = inputText.split("\n");

    const choicesIndex = lines.findIndex(
      (line) => line.trim() === "Group of answer choices"
    );

    const question = lines.slice(0, choicesIndex).join("\n").trim();

    const choices = lines
      .slice(choicesIndex + 1)
      .map((line) => line.trim())
      .filter((line) => line !== "");

    const choicesArray = choices.map(
      (choice, index) => `${index + 1}: ${choice}`
    );

    let prompt = `Select the correct answer:\n`;
    prompt += `Question: ${question}`;
    prompt += "\nChoices:\n";
    prompt += choicesArray.join("\n");

    return prompt;
  }
  async function sendPrompt() {
    let inputText = textareaValue;
    let prompt = convertToPrompt(inputText);
    console.log(prompt);
    let response = await sendRequest(prompt);
    console.log(`Response: ${response}`);
  }
  return (
    <>
      <h1 className="title text-7xl font-bold text-center">QuizGPT</h1>
      <div className="answer-container">
        <h3 className="answer text-3xl text-center">Ask a question!</h3>
      </div>
      <div className="footer">
        <div className="textbox-container flex flex-row w-full">
          <textarea
            type="search"
            id="inputBox"
            className="drop-shadow-xl block w-full text-m"
            placeholder="Send a message"
            value={textareaValue}
            onChange={handleTextareaChange}
          />
          <button
            type="submit"
            className="submitBtn text-white right-2.5 bottom-2.5"
            onClick={sendPrompt}
          >
            <FontAwesomeIcon icon={faPaperPlane} size="xl" />
          </button>
        </div>
      </div>
    </>
  );
}
