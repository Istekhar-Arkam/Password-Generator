import { useState } from "react"

function App() {

const [length,setLength]=useState(8)
const [numberAllowed,setNumberAllowed]=useState(false)
const [charAllowed,setCharAllowed]=useState(false)

 return (
    <>
    <div className="w-screen h-screen">
      <h1 className="bg-black capitalize text-4xl text-white w-screen h-screen text-center py-10 font-bold">password generator</h1>
    </div>
     
    </>
  )
}

export default App
