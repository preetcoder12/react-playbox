import React, { useState } from 'react'

const Toggle_text = () => {
    const [text, settext] = useState(true);
    const toggletext = () => {
        if (!text) {
            settext(true);
        } else {

            settext(false);
        }
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold text-gray-800 mb-6 transition-all duration-300">
                {text ? "Hello World" : ""}
            </h1>

            <button
                onClick={toggletext}
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg shadow-md text-lg font-medium transition duration-300"
            >
                Toggle
            </button>
        </div>

    )
}

export default Toggle_text
