import React from 'react';

const Counter = ({counter,index}) => {
    console.log(`render licznika nr: ${index}`)

    return ( 
        <div>Licznik nr {index}, wynosi: {counter.x}</div>
     );
}
 
//pierwsze i trzecie rozwiazanie - opakowanie elementu w memo 
// export default React.memo(Counter);

// export default Counter; 

//problem typów referencyjnych

export default Counter