import React from 'react'
import BurgerStack from './BurgerStack'
import ClearBurger from './ClearBurger'

const BurgerPane = (props) => {
    return (
        <div className='list burgerlist'>
            <BurgerStack chosenIngredients={props.chosenIngredients}/>
            <ClearBurger clearBurger={props.clearBurger}/>
        </div>
    )
}

export default BurgerPane