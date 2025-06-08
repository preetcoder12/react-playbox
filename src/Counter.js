import React, { useState } from 'react'

const Counter = () => {
    let [counter, setcounter] = useState(0);
    const inc_count = () => {
        setcounter(counter + 1);
    }
    const dec_count = () => {
        setcounter(counter - 1);
    }
    const reset = () => {
        setcounter(0);
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
            <h1 className="text-4xl font-bold mb-6">Counter: {counter}</h1>

            <div className="flex gap-6">
                <button
                    onClick={inc_count}
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                    Increase +
                </button>

                <button
                    onClick={dec_count}
                    className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                    Decrease -
                </button>

                <button
                    onClick={reset}
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                    Reset 0
                </button>
            </div>
        </div>

    )
}

export default Counter
