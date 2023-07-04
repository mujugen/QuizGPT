import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function Home() {
  const [textareaValue, setTextareaValue] = useState("");
  const [questionValue, setQuestionValue] = useState("Ask a question!");
  const [answerValue, setAnswerValue] = useState("");

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
    setTextareaValue("");
    setQuestionValue(prompt);
    console.log(prompt);
    let response = await sendRequest(prompt);
    setAnswerValue(response);
    console.log(`${response}`);
  }
  return (
    <>
      <h1 className="title text-7xl font-bold text-center">QuizGPT</h1>
      <div className="flex flex-row text-container">
        <div className="long-text-container">
          <h2 className="long-text text-5xl text-center mb-8 white">Prompt:</h2>
          <h3
            id="question-box"
            className="long-text text-3xl text-center question-box"
          >
            {questionValue.split("\n").map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h3>
        </div>
        <div className="long-text-container">
          <h2 className="long-text text-5xl text-center mb-8 white">Answer:</h2>
          <h3 id="answer-box" className="long-text text-3xl text-center">
            {answerValue.split("\n").map((item, key) => {
              return (
                <span key={key}>
                  {item}
                  <br />
                </span>
              );
            })}
          </h3>
        </div>
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
