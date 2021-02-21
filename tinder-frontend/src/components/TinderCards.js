import React, { useState } from 'react'
import TinderCard from 'react-tinder-card'
import '../assests/css/TinderCards.css'

export default function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'Elon Mask',
            url:"https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg"
        },
        {
            name: 'Elon Mask',
            url:"https://media.beam.usnews.com/d1/d8/8501ba714a21aed9a7327e02ade1/180515-10thingselonmusk-editorial.jpg"
        }
    ]);

    const swiped =(direction, nameToDelete)=>{
    }

    const outOfFrame =(name)=>{
        console.log(name + "left the screen")
    }
    return (
        <div className="tinderCards">
            <div className="tinderCards__cardContainer">
            {people.map((person)=>(
                <TinderCard
                className="swipe"
                key={person.name}
                preventSwipe={['up','down']}
                onSwipe={(dir)=>swiped(dir, person.name)}
                onCardLeftScreen={()=>outOfFrame(person.name)}
                >
                    <div
                    style={{backgroundImage: `url(${person.url})`}}
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
