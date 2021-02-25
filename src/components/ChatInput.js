import { Button } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import { db } from "../firebase";
import firebase from "firebase";

const ChatInput = ({ channelName, channelId }) => {
  const [input, setInput] = useState("");
  console.log(channelId);
  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }
    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: "wonho",
      userImage:
        "https://avatars.githubusercontent.com/u/62073233?s=460&u=3de8c98fc486dcaa0469a9d1be5f37133bf92aa1&v=4",
    });
    setInput("");
  };
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #ROOM`}
          type="text"
        />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }
  > form > button {
    display: none !important;
  }
`;
