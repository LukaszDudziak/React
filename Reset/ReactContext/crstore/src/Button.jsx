import React, { useContext } from 'react'
import { AppContext } from './AppContext'

const Button = ()=>{
    const {toggleLoggedState} = useContext(AppContext)
        return(
        //przypisuje bez przekazywania żadnych propsów w App.js, wystarczy określenie gdzie jest Provider i gdzie są consumerzy   
             <button
                 onClick = {toggleLoggedState}
             >Przełącz stan użytkownika</button>
        )
}



export default Button