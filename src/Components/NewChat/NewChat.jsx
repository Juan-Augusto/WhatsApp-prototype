import './NewChat.css';
import { useState, useEffect } from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Api from '../../Api';

export const NewChat  = ({user, chatList, show, setShow}) => {
    const [list, setList] = useState([]);
    
    useEffect(()=> {
        const getList = async () => {
            if(user !== null){
                let results = await Api.getContactList(user.id);
                setList(results);
            }
        }
        getList();
    }, [user]);
    const addNewChat = async (user2) => {
        await Api.addNewChat(user, user2)
        handleClose();
    }
    const handleClose = () => {
        setShow(false);
    }
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
                        <div onClick={() => addNewChat(newChatItem)} className="newChat--item" key={newChatKey}>
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