const ChatResponse = ({ response }) => {
  if (!response || !response.candidates || response.candidates.length === 0) {
    return (
      <p className="text-muted text-center mt-3">No response received yet.</p>
    );
  }

  return (
    <div className="container my-4">
      <h3 className="text-primary text-center">Response</h3>
      <div className="response-box">
        {response.candidates[0]?.content?.parts?.[0]?.text ||
          "No response available"}
      </div>
    </div>
  );
};

export default ChatResponse;
