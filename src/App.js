import { useState, useEffect } from 'react';
import './App.css';

import { ChatIntro } from './Components/ChatIntro/ChatIntro';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';
import { ChatWindow } from './Components/ChatWindow/ChatWindow';
import { ChatListStandard } from './Components/ChatListItem/ChatListItem';
import { NewChat } from './Components/NewChat/NewChat';


function App() {
  const[chatList, setChatList]=useState([
    {chatId: 1, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 2, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 3, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'},
    {chatId: 4, title: 'O Brabo tem nome', image: 'https://www.w3schools.com/howto/img_avatar2.png'}

  ]);
  const[activeChat, setActiveChat]= useState({});
  const [user, setUser] = useState(
      {
        id: 1234,
        avatar: 'https://www.w3schools.com/howto/img_avatar2.png',
        name: 'Juan Augusto'
      }
      )
  const [showNewChat, setShowNewChat]=useState(false)
  const handleNewChat = () => {
    setShowNewChat(true);
  }
  // const handleLoginData = async (u) =>{
  //   let newUser = {
  //     id: u.uid,
  //     name: u.displayName,
  //     avatar: u.photoURL
  //   }
  //   setUser(newUser);
  // }
  // if(user === null){
  //   return (<Login />);
  // }
  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatList={chatList}
          user={user}
          show={showNewChat}
          setShow={setShowNewChat}
        />
        <header>
          <img src={user.avatar} alt="" className="header--avatar" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}}/>
            </div>
            <div onClick={handleNewChat} className="header--btn">
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
                data={item}
                active={activeChat.chatId === chatList[key].chatId}
                onClick={()=>setActiveChat(chatList[key])}
              />
            ))
          }
        </div>
      </div>
      <div className="content-area">
        {
          activeChat.chatId !== undefined &&
          <ChatWindow
            user={user}
          />
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
