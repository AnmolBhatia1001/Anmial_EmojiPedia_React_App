import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var emojiObject = {
    "🙈": "See-No-Evil Monkey",
    "🙉": "Hear-No-Evil Monkey",
    "🙊": "Speak-No-Evil Monkey",
    "🐵": "Monkey Face",
    "🐺": "Wolf",
    "🦊": "Fox",
    "🐱": "Cat",
    "🐶": "Dog",
    "🦁": "Lion",
    "🐯": "Tiger",
    "🐭": "Mouse"
  };

  const [meaning, setmeaning] = useState("");
  const [userinput, setuserinput] = useState("");

  function inputChangeHandler(event) {
    var currentEmoji = event.target.value;

    if (emojiObject[currentEmoji] === undefined) {
      setmeaning("this emoji is NA in our Database");
    } else {
      setmeaning(emojiObject[currentEmoji]);
    }

    var currentuserinput = event.target.value;
    setuserinput(currentuserinput);
  }

  // Object to array
  var emojiWeKnow = Object.keys(emojiObject);

  function emojilisthandler(emoji) {
    setuserinput(emoji);
    setmeaning(emojiObject[emoji]);
  }

  return (
    <div className="App">
      <h1>Animal EmojiPedia</h1>

      <input
        onChange={(event) => inputChangeHandler(event)}
        placeholder="Enter / Paste your emoji here"
      />

      <div id="userInput">{userinput}</div>

      <div id="meaning">{meaning}</div>

      <div>
        {emojiWeKnow.map((emoji) => {
          return (
            <span
              key={emoji}
              style={{ cursor: "pointer" }}
              onClick={() => emojilisthandler(emoji)}
            >
              {emoji}
            </span>
          );
        })}
      </div>

      <div></div>
    </div>
  );
}
