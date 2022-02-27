import "./ChatWindowStyle.css";

import EmojiPicker from 'emoji-picker-react';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { useState } from "react";

export const ChatWindow = () => {
  const [emojiOpen, setEmojiOpen]= useState(false)
  const handleEmojiClick = () => {

  }
  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerInfo">
          <img
            className="chatWindow--avatar"
            src="https://www.w3schools.com/howto/img_avatar2.png"
            alt=""
          />
          <div className="chatWindow--name">Juan Augusto</div>
        </div>
          <div className="chatWindow--headerButtons">
            <div className="chatWindow--btn">
              <SearchIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <AttachFileIcon style={{ color: "#919191" }} />
            </div>
            <div className="chatWindow--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        
      </div>
      <div className="chatWindow--body"></div>
      <div 
        className="chatWindow--emojiArea" 
        style={{height: emojiOpen ? '300px' : '0px'}}>
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
         >
          

        </EmojiPicker>
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--btn"
              onClick = {handleCloseEmoji}
              style={{width: emojiOpen ? 40 : 0}}
          >
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn"
              onClick={handleOpenEmoji}
          >
            <InsertEmoticonIcon style={{ color: emojiOpen ? '#009688' : "#919191" }} />
          </div>
        </div>
        <div className="chatWindow--inputArea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="mensagem"
          />
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MicIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
};
