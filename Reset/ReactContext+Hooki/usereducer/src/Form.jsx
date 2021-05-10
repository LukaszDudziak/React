import React, {useState} from 'react';

const Form = ({addHandler}) => {

    //stan lokalny formularza
    const [inputData, setInputData] = useState('')

    //obsługa nadawania wartości state względem wpisanych w inputa danych
    const handleOnChange = event => setInputData(event.target.value)

    //wysłanie formularza
    const handleOnClick =()=> {
        //przygotowanie nowego obiektu kursu
        const newCourse = {
            id: Math.floor(Math.random()*1000),
            title:inputData,
        }
        //wysyłka do reduktora
        addHandler({type:'ADD', course: newCourse});
        // zerowanie inputa
        setInputData('')
    }

    return ( 
        <div>
            <input type="text" onChange={handleOnChange} value={inputData}/>
            <button onClick={handleOnClick}>Dodaj kurs</button>
        </div>
     );
}
 
export default Form;