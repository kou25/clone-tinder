import React from 'react'
import '../assests/css/SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
const alreadyRemoved = []
export default function SwipeButtons({childRefs, people}) {

    const swipe = (dir) => {

        const cardsLeft = people.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
          const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
          const index = people.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
          alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
          childRefs[index].current.swipe(dir) // Swipe the card!
        }
      }
    return (
        <div className='swipeButtons'>
             <IconButton  className="swipeButtons__repeat">
                <ReplayIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__left" onClick={() => swipe('left')}>
                <CloseIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__star">
                <StarRateIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__right" onClick={() => swipe('right')}>
                <FavoriteIcon fontSize="large"/>
            </IconButton>
            <IconButton  className="swipeButtons__lightning">
                <FlashOnIcon fontSize="large"/>
            </IconButton>
        </div>
    )
}
