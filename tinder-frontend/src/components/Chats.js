import React from 'react'
import '../assests/css/Chats.css'
import Chat from './Chat'
export default function Chats() {
    return (
        <div className="chats">
            <Chat
            name="Anna"
            message="Hey! How r u ?"
            timestamp='35 minutes ago'
            profilePic="https://i.pinimg.com/originals/07/76/ee/0776ee4f0b8fef6c903274b48e5ce39f.jpg"
            />
              <Chat
            name="Ellen"
            message="Hey! ❤️"
            timestamp='55 minutes ago'
            profilePic="https://blogginggyan.com/wp-content/uploads/2017/03/16174790_1141893685908105_5832471631153097134_n.jpg"
            />
              <Chat
            name="Mary"
            message="Babe 😘"
            timestamp='1 hr ago'
            profilePic="https://i.pinimg.com/736x/18/e2/33/18e2337544acda039bd66d316763856d.jpg"
            />
              <Chat
            name="Kitty"
            message="What's up ... ?"
            timestamp='3 days ago'
            profilePic="https://1.bp.blogspot.com/-3cBsCFs_zi8/XmSUe8qA0gI/AAAAAAAAPRk/JyQUpnfKvYIu49TSNhHgYQ1_iLcHUFrYwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252820%2529.jpg"
            />
        </div>
    )
}
