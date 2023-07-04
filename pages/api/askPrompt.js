var { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
var openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log("Received POST request:", req.body);
    let prompt = req.body;
    let response = await askPrompt(prompt);
    res.status(200).json({ message: response });
  } else {
    res.status(405).json({ message: "Method not allowed." });
  }
}

async function askPrompt(prompt) {
  console.log(`Waiting for response (API KEY: ${process.env.OPENAI_API_KEY})`);
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
