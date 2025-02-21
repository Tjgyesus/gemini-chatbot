import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ChatInput from "./ChatInput";
import ChatResponse from "./ChatResponse";
import { fetchChatResponse } from "./services/api";

function App() {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleQuestionSubmit = async (question) => {
    console.log("Submitting question:", question);
    setLoading(true);
    setResponse({
      candidates: [{ content: { parts: [{ text: "Thinking..." }] } }],
    });
    try {
      const apiResponse = await fetchChatResponse(question);
      console.log("API Response:", apiResponse);
      if (apiResponse.error) {
        alert(apiResponse.error);
      } else {
        setResponse(apiResponse);
      }
    } catch (error) {
      console.error("Request Failed:", error);
      alert("Failed to get response from server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="App">
        <header className="bg-primary text-white text-center py-4">
          <h1>Gemini Chatbot</h1>
        </header>
        <ChatInput onSubmit={handleQuestionSubmit} />
        <ChatResponse response={response} />
      </div>
    </>
  );
}

export default App;
