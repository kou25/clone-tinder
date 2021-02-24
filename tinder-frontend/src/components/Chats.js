import React,{ useState, useEffect } from 'react'
import '../assests/css/Chats.css'
import Chat from './Chat'
import axios from '../axios'

export default function Chats() {
  const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/chats');
            setPeople(req.data)
        }

        fetchData();
    },[])
    return (
        <div className="chats">
          {people.map((person)=>(
            <Chat
            name={person.name}
            message={person.message}
            timestamp={person.timestamp}
            profilePic={person.profilePic}
            />))}
             
        </div>
    )
}
