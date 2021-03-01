import React, {useState} from 'react';


  const UseStateObject = () => {
    const [myObject, setmyObject] = useState({
        myName:"Himanshu", myAge:23, degree:"B.Tech"
    });
    const change=()=>{
        setmyObject({...myObject,myName:"Hemant"});
    }
    return (
         <>
         <h1>Name:{myObject.myName}, Age:{myObject.myAge}, Degree:{myObject.degree} </h1>
         <button onClick={change}>Update</button>
         </>
    )
}
export default UseStateObject;
