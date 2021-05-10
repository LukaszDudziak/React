import React, { useEffect,useLayoutEffect } from 'react';

const Triangle = () => {

    //uE najpierw wyrysuje element, a dopiero pózniej go ustawi,
    // uLE od razu ustawia element
    useLayoutEffect(()=>{
        const element = document.querySelector('.triangle');
        element.style.top = '50%'
        element.style.left = '50%'
        element.style.transform = 'translate(-50%, -50%) rotate(90deg)'
    },[])

    return ( 
         <div className='triangle'></div>
     );
}
 
export default Triangle;