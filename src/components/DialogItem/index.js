import React from 'react';
import classNames from "classnames"
import {format, isToday} from 'date-fns'

import {IconReaded} from "components";

import "./DialogItem.scss";

const getAvatar = avatar => {
    if (avatar) {
        return <img src={avatar} alt=""/>
    } else {
        // make avatar
    }
}

const getMessageTime = created_at => {
    created_at = Date.parse(created_at)
    if (isToday(created_at)) {
        return format(new Date(created_at), 'HH:mm')
    } else {
        return format(new Date(created_at), 'dd.MM.yyyy')

    }
}


const DialogItem = ({user, unreaded, isMe, created_at, text}) => (
    <div className={classNames("dialogs__item", {"dialogs__item--online": user.isOnline})}>
        <div className="dialogs__item-avatar">
            {getAvatar(user.avatar)}
            {/*<img src={user.avatar} alt={`${user.fullName} avatar`}/>*/}
            {/*<img src="https://sun9-73.userapi.com/t4_Cw3QgmkbFPRLX791DGFREZrlsf3lgVC3c7g/7wVxM7f0Qr8.jpg" height="40px" width="40px" alt=""/>*/}
        </div>
        <div className="dialogs__item-info">
            <div className="dialogs__item-info-top">
                <b>{user.fullName}</b>
                <span>
                    {getMessageTime(created_at)}
                    {/*13:05*/}
                </span>
            </div>
            <div className="dialogs__item-info-bottom">
                <p>{text}</p>
                {isMe && <IconReaded isMe={true} isReaded={true}/>}
                {unreaded > 0 &&
                <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? "+9" : unreaded}</div>}
            </div>
        </div>
    </div>
);

export default DialogItem