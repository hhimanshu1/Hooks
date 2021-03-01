import React,{useState} from 'react';
 
    const UseStateArray = () => {
        const bioData=[
            {
                id:0, myName:"Himanshu", age:19
            },
            {
                id:1, myName:"Hemant", age:20
            },
            {
                id:2, myName:"Ravan", age:21
            }
        ]
        const [myArray, setmyArray] = useState(bioData);
        const clearArray=()=>{
            setmyArray([]);
        }
        const remove=(id)=>{
            const newArray=myArray.filter((val)=>{
                return val.id !== id;
            })
            setmyArray(newArray);
        }
     return (
          <>
           {
               myArray.map((val)=>{
                   return(
                     <h1 key={val.id}>Name:{val.myName}, age:{val.age} 
                    <button onClick={()=> remove(val.id)}>Remove</button>
                    </h1>
                   );
               })
           }
           <button onClick={clearArray}>Clear</button>
          </>
     )
 }

export default UseStateArray;
 
 
