import React,{useState} from 'react'

  const ShortCircuit = () => {
      const [demo, setdemo] = useState("");
    return (
        <>
            <h1>{demo || 
            <>
            <h1>Mast</h1>
            <p>You can do anything</p>
            </>
            } </h1>
            <h1>Hemant {demo && "Hemant"}</h1>
        </>
    )
}
export default ShortCircuit;
