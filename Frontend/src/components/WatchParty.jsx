import React, { useState } from "react";
import "./WatchParty.css";

const WatchParty = () => {
  const [activeTab, setActiveTab] = useState("chat");
  const [messages, setMessages] = useState([
    { text: "They are preparing for another stunt!", color: "yellow" },
    { text: "Is he going to fall?", color: "pink" },
    { text: "This is funny 😂", color: "grey" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { text: input, color: "grey" }]);
    setInput("");
  };

  return (
    <div className="watchparty">
      <div className="tabs">
        <button onClick={()=>setActiveTab("chat")} className={activeTab==="chat"?"active":""}>💬</button>
        <button onClick={()=>setActiveTab("video")} className={activeTab==="video"?"active":""}>🎬</button>
        <button onClick={()=>setActiveTab("people")} className={activeTab==="people"?"active":""}>👥</button>
      </div>

      {activeTab === "chat" && (
        <>
          <div className="chat-body">
            {messages.map((msg,i)=>(
              <div className="msg" key={i}>
                <span className={`avatar1 ${msg.color}`}></span>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="input-area">
            <input
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter" && sendMessage()}
              placeholder="Type message..."
            />
            <button onClick={sendMessage}>➤</button>
          </div>
        </>
      )}

      {activeTab === "video" && (
        <div className="chat-body">
          <p>Up Next...</p>
        </div>
      )}

      {activeTab === "people" && (
        <div className="chat-body">
          <p>Participants list</p>
        </div>
      )}
    </div>
  );
};

export default WatchParty;
