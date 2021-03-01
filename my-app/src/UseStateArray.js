import React,{useState} from 'react';
 
    const UseStateArray = () => {
        const bioData=[
            {
                id:0, myName:"Himanshu", age:19
            },{
                id:1, myName:"Hemant", age:20
            }
        ]
        const [myArray, setmyArray] = useState(bioData);
        const clearArray=()=>{
            setmyArray([]);
        }
     return (
          <>
           {
               myArray.map((val)=>{
                   return <h1 key={val.id}>Name:{val.myName}, age:{val.age} </h1>
               })
           }
           <button onClick={clearArray}>Clear</button>
          </>
     )
 }

export default UseStateArray;
 
 
