import "./ChatListItemStyle.css"

export const ChatListStandard = ({onClick}) => {
    return(
        <div 
            className="chatListItem"
            onClick={onClick}    
        >
            <img className="chatListItem--avatar" src="https://www.w3schools.com/howto/img_avatar2.png" alt="" />
            <div className="chatListItem--lines">
                <div className="chatListItem--line">
                    <div className="chatListItem--name">Juan Augusto</div>
                    <div className="chatListItem--date">19:00</div>
                </div>
                <div className="chatListItem--line">
                    <div className="chatListItem--lastMsg">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam alias quidem praesentium reprehenderit nostrum reiciendis rerum voluptatem, quod eos officia sed nam. Alias quo iure ducimus tenetur, natus harum reiciendis quas eaque, ex blanditiis veritatis non exercitationem eveniet aut autem a nostrum ab rem. Eum quas accusamus cumque placeat unde!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}