import "./ChatWindowStyle.css";

import { MessageItem } from "../MessageItem/MessageItem";
import EmojiPicker from 'emoji-picker-react';
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";
import { useState, useEffect, useRef } from "react";

export const ChatWindow = ({user}) => {
  console.log(user)
  const body = useRef();
  let recognition = null;
  let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if(SpeechRecognition !== undefined){
    recognition = new SpeechRecognition();
  }

  const [emojiOpen, setEmojiOpen]= useState(false);
  const [text, setText] = useState('');
  const [listening, setListening] = useState(false);
  const [list, setList] = useState([
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'},
    {author: 123, body: 'bla bla bla'}, 
    {author: 123, body: 'bla bla'}, 
    {author: 1234, body: 'bla bla bla bla'}
  ]);
  useEffect(() => {
    if(body.current.scrollHeight > body.current.offsetHeight){
      body.current.scrollTop = body.current.scrollHeight - body.current.offsetHeight;
    }
  },[list])
  const handleEmojiClick = ( e, emojiObject) => {
    setText( `${text} ${emojiObject.emoji}` );
  }
  const handleOpenEmoji = () => {
    setEmojiOpen(true)
  }
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  }
  const handleSendClick = () => {
    console.log(text)
  }
  const handleMicClick = () => {
    if(recognition !== null){
      recognition.onstart = () => {
        setListening(true);
      }
      recognition.onend = () => {
        setListening(false);
      }
      recognition.onresult = (e) => {
        setText(e.results[0][0].transcript);
      }
      recognition.start();
    }
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
      <div ref={body} className="chatWindow--body">
        {
          list.map((message, messageKey) =>(
            <MessageItem
              key={messageKey}
              user={user}
              data={message}
            />
          ))
        }
      </div>
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
            value={text}
            onChange={e=>setText(e.target.value)}
          />
        </div>
        <div className="chatWindow--pos">
          {
            text === '' &&
            <div onClick={handleMicClick} className="chatWindow--btn">
              <MicIcon style={{ color: listening ? '#126ECE' : "#919191" }} />
            </div>
          }
          {
            text !== '' &&
            <div onClick={handleSendClick} className="chatWindow--btn">
              <SendIcon onClick={handleSendClick} style={{ color: "#919191" }} />
            </div>
          }
        </div>
      </div>
    </div>
  );
};
