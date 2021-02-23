import { fchmodSync } from "fs";

import React, { useState } from 'react'
import '../assests/css/ChatScreen.css'
import Avatar from '@material-ui/core/Avatar'

export default function ChatScreen() {
    const[input, setInput]=useState('')
    const[messages, setMessages]=useState([
        {
            name: "Ellen",
            image: "https://blogginggyan.com/wp-content/uploads/2017/03/16174790_1141893685908105_5832471631153097134_n.jpg",
            message: "Hey! ❤️"
        },
        {
            name: "Ellen",
            image: "https://blogginggyan.com/wp-content/uploads/2017/03/16174790_1141893685908105_5832471631153097134_n.jpg",
            message: "What's up ?"
        },
        {
            message:"Hey ! Hi Ellen. How are you *_* ?"
        },
        {
            name: "Ellen",
            image: "https://blogginggyan.com/wp-content/uploads/2017/03/16174790_1141893685908105_5832471631153097134_n.jpg",
            message: "I m fine :)"
        },
        {
            message:"Me 2 :D"
        }
    ])

    const handleSend =e=>{
        e.preventDefault()
        setMessages([...messages, {message: input}]);
        setInput("");
    }
    return (
        <div className="chatScreen">
            <p className='chatScreen__timestamp'>YOU MATCHED WITH ELLEN ON 10/01/2021</p>
            {messages.map(message=>(
                message.name ?
               ( <div className="chatScreen__message">
                     <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                    <p className="chatScreen__text">{message.message}</p>
                </div>)
                :(
                    <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>
                )

            ))}
                <form className="chatScreen__input">
                    <input value={input} onChange={e=>setInput(e.target.value)}
                     className="chatScreen__inputField" type="text" placeholder="Type a mesage..."/>
                    <button onClick={handleSend} type="submit" className="chatScreen__button">SEND</button>
                </form>
            </div>
    )
}
