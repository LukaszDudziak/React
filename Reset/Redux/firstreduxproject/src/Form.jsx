import React, {useState} from 'react';

const Form = ({
    author = '',
    callback,
    comment ='',
    id,
    rate = 0,
}) => {
    const [authorInput, setAuthorInput] = useState(author);
    const [rateInput, setRateInput] = useState(rate);
    const [commentInput, setCommentInput] = useState(comment);

    const handleChangeAuthor = event => setAuthorInput(event.target.value)
    const handleChangeRate = event => setRateInput(event.target.value)
    const handleChangeComment = event => setCommentInput(event.target.value)

    const handleOnSubmit = event => {
        event.preventDefault()
        //minisprawdzenie poprawności formularza
        if(!authorInput.length){
            return
        }
        //utworzenie obiektu z wbitych w formularz wartości, w momencie submita
        const rateObject = {
            author:authorInput,
            comment:commentInput,
            id,
            rate: Number(rateInput),
        }

        console.log(rateObject)

        id? console.log('Edycja oceny'): console.log('Dodaj ocenę')

        if(id){
            callback()
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
 
export default Form;