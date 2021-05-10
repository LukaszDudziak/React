import React, {createRef, PureComponent} from 'react'

class Counter extends PureComponent{
    state = {
        counter: 0,
    }

    componentRef = createRef()

    render(){

        const {counter} = this.state

        return(
            <div ref={this.componentRef}>
                <p>Wartość licznika wynosi: {counter}</p>
                <button onClick={this.asyncIncreaseCounterValue}>Pobierze asynchroniczne dane</button>
            </div>
        )
    }

    asyncIncreaseCounterValue = () => setTimeout(
        () =>{
            //dzięki temu ifowi, nie sprawdzam sytuacji, w której komponen zniknął, a ja gdzieś wymagałem asynchronicznie jego aktualizacji
            if(this.componentRef.current){
            this.setState(prevState=>({
                counter: prevState.counter + 1,
            }))}
        }, 3000
    )
}

export default Counter;