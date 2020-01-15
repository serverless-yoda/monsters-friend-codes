import React from 'react'
import './card-list.styles.css'
import Card from '../card/card.component'

const Cardlist = props => {
    return (
        <div className='card-list'>
            {
                props.monsters.map(monster => <Card monster={monster} key={monster.id} />)
            }
        </div>
    )
}

export default Cardlist