import React, { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import '../assests/css/TinderCards.css'
import axios from '../axios'

export default function TinderCards({childRefs}) {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const req = await axios.get('/tinder/card');
            setPeople(req.data)
        }

        fetchData();
    },[])

    const swiped =(direction, nameToDelete)=>{
    }

    const outOfFrame =(name)=>{
        console.log(name + "left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person, index)=>(
                <TinderCard ref={childRefs[index]}
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage: `url(${person.imgUrl})`}}
                    className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>

                </TinderCard>
            ))}
            </div>
        </div>
    );
}
