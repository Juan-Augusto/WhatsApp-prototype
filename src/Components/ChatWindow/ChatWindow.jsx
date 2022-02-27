import "./ChatWindowStyle.css";
import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CloseIcon from "@material-ui/icons/Close";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export const ChatWindow = () => {
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
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--btn">
            <InsertEmoticonIcon style={{ color: "#919191" }} />
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
