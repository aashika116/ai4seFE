//Aashika M Suresh, Shruti Khule
import React, { useState } from 'react';
import './Homepage.scss';

const Homepage = () => {

  
  // Define the questions and their corresponding solutions
    const questionSolutions = {
      "what is systems engineering": "Systems engineering is an interdisciplinary field of engineering and engineering management that focuses on how to design, integrate, and manage complex systems over their life cycles. At its core, systems engineering utilizes systems thinking principles to organize this body of knowledge. The individual outcome of such efforts, an engineered system, can be defined as a combination of components that work in synergy to collectively perform a useful function."
    };
    // State for chat messages and user input
  const [chatMessages, setChatMessages] = useState([{ question: "Chat assistant", answer: "", isBot: true }]);
  const [userInput, setUserInput] = useState('');

  // Function to check if a question has a solution
  function hasSolution(question) {
    const lowercaseQuestion = question.toLowerCase();
    return questionSolutions.hasOwnProperty(lowercaseQuestion);
  }

  // Function to get the solution for a question
  function getSolution(question) {
    const lowercaseQuestion = question.toLowerCase();
    return questionSolutions[lowercaseQuestion];
  }

  // Function to handle user input and display responses
  function sendMessage() {
    if (userInput.trim() !== "") {
      const newMessage = { question: userInput, answer: "", isBot: false };
      setChatMessages([...chatMessages, newMessage]);
      const botResponse = { question: userInput, answer: generateResponse(userInput), isBot: true };
      setChatMessages([...chatMessages, botResponse]);
      setUserInput('');
    }
  }

  // Function to generate response
  function generateResponse(question) {
    const lowercaseQuestion = question.toLowerCase();
    if (hasSolution(lowercaseQuestion)) {
      return getSolution(lowercaseQuestion);
    } else {
      return "Be back in a while, working on it...";
    }
  }

  // Function to handle pressing Enter key
  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (!event.shiftKey) {
        // If Shift key is not pressed, send the message
        sendMessage();
        event.preventDefault(); // Prevent default behavior (submitting form)
      } else {
        // If Shift key is pressed, insert a newline character
        setUserInput(prevState => prevState + '\n');
      }
    }
  }

  

  return (
    <div className="homepage-container">
      
      <div className="documents-section">
        <p>Documents</p>
        {/* Add content for documents section here */}
      </div>
      <div className="chatbot-container">
        <div className="chat-container">
          <div className="messages-container">
            {chatMessages.map((message, index) => (
              <div key={index} className={`chat-message ${message.isBot ? 'bot-message' : 'user-message'}`}>
                <div className={`assistant ${message.question === "Chat assistant" ? 'red-font' : ''}`}>{message.question}</div>
                {message.answer && <div>{`${message.answer}`}</div>}
              </div>
            ))}
          </div>
          <div className="input-container">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress} 
              placeholder="Type your question here..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      </div>

      {/* Heading for Process Assessment */}
      <div className="process-assessment">
        <p> Process assessment </p>
      </div>

      {/* Floating boxes */}
      <div className="floating-boxes">
        <div className="floating-box-pair">
          <div className="floating-box11" onClick={() => alert("Next page: Upload sys. 1 documents")}>sys. 1</div>
          <div className="floating-box12" onClick={() => alert("Next page: Upload sys. 4 documents")}>sys. 6</div>
        </div>
        <div className="floating-box-pair">
          <div className="floating-box21" onClick={() => alert("Next page: Upload sys. 2 documents")}>sys. 2</div>
          <div className="floating-box22" onClick={() => alert("Next page: Upload sys. 5 documents")}>sys. 5</div>
        </div>
        <div className="floating-box-pair">
          <div className="floating-box31" onClick={() => alert("Next page: Upload sys. 3 documents")}>sys. 3</div>
          <div className="floating-box32" onClick={() => alert("Next page: Upload sys. 6 documents")}>sys. 4</div>
        </div>
      </div>
    </div>
  )
}

export default Homepage





