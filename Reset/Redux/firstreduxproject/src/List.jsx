import React from 'react';
// import {connect} from 'react-redux' 
import {useSelector} from 'react-redux' //2

import Element from './Element';

// const List = ({rates}) => {
//     const ratesElements = rates.map(rate=>(<Element key={rate.id} {...rate}/>))

//     return ( 
//         <ul>
//             {ratesElements}
//         </ul>
//      );
// }

// z użyciem hooków
const List = () => {
    const rates = useSelector(store => store.rates);
    const ratesElements = rates.map(rate=>(<Element key={rate.id} {...rate}/>))

    return ( 
        <ul>
            {ratesElements}
        </ul>
     );
}
 
//łączę listę ze storem w którym zapisany jest reducer do danego elementu (rates)
// const connectReduxStateToProps = store =>({rates: store.rates})
    
//     const ListConsumer = connect(connectReduxStateToProps)(List)
    
//     export default ListConsumer;

    export default List;