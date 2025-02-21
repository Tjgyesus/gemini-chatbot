import axios from "axios";

const API_URL = "http://localhost:8080/api/qna/ask"; // Ensure backend URL is correct

export const fetchChatResponse = async (question) => {
  try {
    const response = await axios.post(
      API_URL,
      { question },
      {
        headers: { "Content-Type": "application/json" },
        timeout: 5000, // Set a timeout in case API is slow
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    return { error: "Failed to fetch response. Check API logs." };
  }
};
