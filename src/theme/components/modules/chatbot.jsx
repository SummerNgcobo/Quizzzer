import React, { useState, useEffect } from "react";
import styles from '../../styles/chatbot.module.css';
import { ModuleFields, TextField, RichTextField, ImageField } from '@hubspot/cms-components/fields';

export function Component({ fieldValues }) {
  const { headline, description, image } = fieldValues;

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", from: "bot" }
  ]);
  const [input, setInput] = useState("");

  // Load HubSpot script
  useEffect(() => {
    if (!document.getElementById("hs-script-loader")) {
      const script = document.createElement("script");
      script.id = "hs-script-loader";
      script.type = "text/javascript";
      script.async = true;
      script.defer = true;
      script.src = "//js.hs-scripts.com/47574277.js";
      document.body.appendChild(script);
    }
  }, []);

  const sendMessage = () => {
    if (!input) return;
    setMessages([...messages, { text: input, from: "user" }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { text: "Got it!", from: "bot" }]);
    }, 500);
  };

  return (
    <div className={styles.chatbotWrapper}>
      {isOpen && (
        <div className={styles.chatWindow}>
          {headline && <h2 className={styles.headline}>{headline}</h2>}
          {description && <p className={styles.description}>{description}</p>}
          {image && <img src={image} alt="Chatbot" className={styles.image} />}
          <div className={styles.messages}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={msg.from === "bot" ? styles.botMsg : styles.userMsg}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className={styles.inputWrapper}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Type a message..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {/* Toggle Button - the purple HubSpot-like icon */}
      <button
        className={styles.toggleButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Open chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="24"
          height="24"
          fill="white"
        >
          <path d="M16 0C7.164 0 0 6.507 0 14.5 0 18.383 1.828 22.004 5 24.999V32l7.117-4.106C14.312 28.104 15.148 28 16 28c8.836 0 16-6.507 16-14.5S24.836 0 16 0zm1 21h-2v-2h2v2zm0-4h-2V7h2v10z"/>
        </svg>
      </button>
    </div>
  );
}

// HubSpot module fields
export const fields = (
  <ModuleFields>
    <TextField name="headline" label="Headline" default="Chat with us!" />
    <RichTextField name="description" label="Description" default="Ask me anything." />
    <ImageField name="image" label="Image" />
  </ModuleFields>
);

export const meta = {
  label: 'Chatbot Module',
};
