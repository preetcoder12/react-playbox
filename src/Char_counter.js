import React, { useState } from 'react'

const Toggle_text = () => {
    const [cnt, setcnt] = useState(0)
    const [value, setvalue] = useState("");
    const handleinput = (e) => {
        const input = e.target.value;
        setvalue(input);
        setcnt(input.length)
    }


    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4">
            <label className="text-xl font-semibold mb-2 text-gray-700">
                Your text: <span className="text-indigo-600">{value}</span>
            </label>

            <input
                onChange={handleinput}
                value={value}
                type="text"
                id="written"
                placeholder="Type here..."
                className="w-full max-w-xs px-4 py-2 mb-4 bg-green-200 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            />

            <h1 className="text-4xl font-bold text-gray-800">{cnt}</h1>
        </div>


    )
}

export default Toggle_text
