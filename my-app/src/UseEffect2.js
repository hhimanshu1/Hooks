import React,{useState,useEffect} from 'react'
 

 const UseEffect2 = () => {
     const[count, setCount]= useState(window.screen.width);

     const actualWidth=()=>{
         setCount(window.innerWidth);
     }

     useEffect(()=>{
        window.addEventListener('resize',actualWidth);
        return()=>{
            window.removeEventListener('resize',actualWidth);
        }
     });
          return(
        <div>
            <h4>The size of window is:</h4>
            <h1>{count}</h1>
        </div>
    )
}

export default UseEffect2;