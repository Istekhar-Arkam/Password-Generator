import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
const passwordRef=useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword]);

const passwordToClipboard=useCallback(()=>{
  // optimize to select password in next line only
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])
  
useEffect(()=>{
  passwordGenerator()
},[length, numberAllowed, charAllowed,passwordGenerator])
  return (
    <>
      <center>
        <div className="max-w-2xl px-4 mx-2 mt-20 bg-gray-600 rounded-lg py-7">
          <h1 className="text-4xl font-bold capitalize pb-7 text-lime-500">
            password generator
          </h1>

          <div className="flex">
            <input
              type="text"
              placeholder="Password"
              value={password}
              className="w-full p-2 text-lg rounded-tl-md rounded-bl-md"
              ref={passwordRef}
            />
            <button className="px-4 py-1 text-lg font-semibold text-white capitalize hover:bg-lime-600 bg-lime-500 rounded-br-md rounded-tr-md" onClick={passwordToClipboard}>
              copy
            </button>
          </div>
          <div className="flex flex-col mt-5 gap-x-5 sm:flex-row">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={0}
                max={15}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label className="text-lime-500 ">Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="NumberInput" className="text-lime-500">
                Number
              </label>
            </div>
            <div className="flex items-center gap-x-1">
              <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="charInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
              />
              <label htmlFor="CharacterInput" className="text-lime-500">
                Character
              </label>
            </div>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
