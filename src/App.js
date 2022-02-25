import { useState, useEffect } from 'react';
import './App.css';

import { ChatIntro } from './Components/ChatIntro';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { ChatWindow } from './Components/ChatWindow';
import { ChatListStandard } from './Components/ChatListItem';


function App() {
  const[chatList, setChatList]=useState([
    {chatId: 1, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'}

  ]);
  const[activeChat, setActiveChat]= useState({});

  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="" className="header--avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <ChatIcon style={{color: '#919191'}}/>
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}}/>
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize='small' style={{color: '#919191'}}></SearchIcon>
            <input type="search" placeholder='Procurar ou começar uma nova conversa' />
          </div>
        </div>
        <div className="chatList">
          {
            chatList.map((item, key) => (
              <ChatListStandard
                key={key}
                onClick={()=>setActiveChat(chatList[key])}
              />
            ))
          }
        </div>
      </div>
      <div className="content-area">
        {
          activeChat.chatId !== undefined &&
          <ChatWindow/>
        }
        {          
        
          activeChat.chatId === undefined &&
          <ChatIntro/>
        }
      </div>
    </div>
  );
}

export default App;
