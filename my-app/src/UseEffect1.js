import React,{useEffect, useState} from 'react';

  const UseEffect1 = () => {
      const[count, setCount]=useState(0);
      useEffect(()=>{
          if(count>=1)
          document.title=`Chats${count}`;
          else
          document.title=`Chats`;
      },[count]);  //this will renderd only when value of count changes
      useEffect(()=>{
        console.log("Hemant");
      },[]);  //this will rendered only after first load
      
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Click😄</button>
        </div>
    )
}
export default UseEffect1;

// useEffect is rendered after every page load 
// useState makes page rendered every time and thus make useEffect rendered
// If you want to work outside componnet then use useEffect