import { useCallback, useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%&*:`";

    for (let i = 1; i <= array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
    }
  }, [length, numberAllowed, charAllowed, setPassword]);

  return (
    <>
    <center>
      <div className="bg-gray-600 max-w-2xl mt-20 rounded-lg py-7 px-4 mx-2">
        <h1 className="capitalize text-4xl text-white font-bold pb-7">
          password generator
        </h1>
        <div className="flex">
        <input type="text" placeholder="Password"value={password} className="w-full p-2 rounded" />
        <button className="bg-red-600 px-4 text-lg py-1 rounded text-white capitalize">copy</button>
      </div>
      </div>
      </center>
    </>
  );
}

export default App;
