import React, { useState } from 'react'

const Toggle_text = () => {
    const [pass, setpass] = useState(false)
    const [val, setval] = useState("");
    const inputfield = (e) => {
        setval(e.target.value);
    }
    const tglpass = () => {
        if (pass) {
            setpass(false)
        }
        else {
            setpass(true)
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 gap-4">
        <label className="text-lg font-semibold text-gray-700">
          Enter Text:
        </label>
      
        <input
          type={pass ? "password" : "text"}
          onChange={inputfield}
          value={val}
          placeholder="Type something..."
          className="w-full max-w-sm px-4 py-2 bg-green-200 text-gray-800 rounded-lg shadow-sm outline-none focus:ring-2 focus:ring-green-500 transition"
        />
      
        <button
          onClick={tglpass}
          className="mt-2 px-5 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg shadow transition"
        >
          {pass ? "Show" : "Hide"}
        </button>
      </div>
      


    )
}

export default Toggle_text
