import React, { PureComponent } from 'react'
import { AppContext } from './AppContext'

class Button extends PureComponent{

    // użycie statycznej property żeby ukrucić text (zapis zwykły w UserInfo)
    static contextType= AppContext;

    render(){
        const {toggleLoggedState} = this.context

        return(
        //przypisuje bez przekazywania żadnych propsów w App.js, wystarczy określenie gdzie jest Provider i gdzie są consumerzy   
             <button
                 onClick = {toggleLoggedState}
             >Przełącz stan użytkownika</button>
        )
    }

}

export default Button