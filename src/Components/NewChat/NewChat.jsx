import './NewChat.css';
import { useState } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

export const NewChat  = ({user, chtaList, show, setShow}) => {
    const handleClose = () => {
        setShow(false);
    }
    const[list, setList] = useState([
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Teste'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Teste'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Teste'},
        {id: 123, avatar: 'https://www.w3schools.com/howto/img_avatar2.png', name: 'Teste'}
    ]);
    return(
        <div className='newChat' style={{left: show ? 0 : '-415px'}}>
            <div className='newChat--head'>
                <div onClick={handleClose} className="newChat--backbutton">
                    <ArrowBackIcon style={{color: '#fff'}}/>
                </div>
                <div className="newChat--headTitle">
                    Nova Conversa
                </div>
            </div>
            <div className='newChat--List'>
                {
                    list.map((newChatItem, newChatKey) =>(
                        <div className="newChat--item" key={newChatKey}>
                            <img className='newChat--itemAvatar' src={newChatItem.avatar} alt="" />
                            <div className="newChat--itemName">
                                {newChatItem.name}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}