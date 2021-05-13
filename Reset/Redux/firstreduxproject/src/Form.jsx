import React, {useState} from 'react';
// import { connect } from 'react-redux';
import {useDispatch} from 'react-redux' //2 - funkcyjny

import {addRate, editRate} from './actions/appActions'

const Form = ({
    // addRate,
    author = '',
    callback,
    comment ='',
    // editRate,
    id,
    rate = 0,
}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const dispatch = useDispatch() //2

    const handleChangeAuthor = event => setAuthorInput(event.target.value)
    const handleChangeRate = event => setRateInput(event.target.value)
    const handleChangeComment = event => setCommentInput(event.target.value)

    const handleOnSubmit = event => {
        event.preventDefault()
      
        //utworzenie obiektu z wbitych w formularz wartości, w momencie submita
        const rateObject = {
            author:authorInput,
            comment:commentInput,
            id,
            rate: Number(rateInput),
        }

        // id 
        // ? (editRate(rateObject))
        // : (addRate(rateObject));

        //2 - funkcyjny
         id 
        ? dispatch(editRate(rateObject))
        : dispatch(addRate(rateObject));

        if(id&& callback){
            callback();
        }

    }

    return ( 
        <form onSubmit={handleOnSubmit}>
            <div>
                <label >
                    Autor:
                    <input onChange={handleChangeAuthor}type="text" value={authorInput}/>
                </label>
            </div>
            <div>
                <label >
                    Ocena:
                    <input onChange={handleChangeRate}type="text" value={rateInput}/>
                </label>
            </div>
            <div>
                <label >
                    Komentarz:
                    <input onChange={handleChangeComment}type="text" value={commentInput}/>
                </label>
            </div>
            <button type='submit'>{id? 'Edycja oceny':'Dodaj ocenę'}</button>
        </form>
     );
}

// pod klasowy

// const connectActionsToProps = ({
//     addRate,
//     editRate,
// })

// const FormConsumer = connect(null, connectActionsToProps)(Form)
 
// export default FormConsumer;

//2 - funkcyjny
export default Form;