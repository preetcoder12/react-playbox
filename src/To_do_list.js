import React, { useState } from 'react'

const To_do_list = () => {

    const [value, setvalue] = useState("")

    const [task, settask] = useState([])

    const addtask = () => {
        if (value.trim() !== "") {
            settask([...task, value])
            setvalue("");
        }
    }
    
    const removetask = (indexToRemove) => {
        settask(task.filter((_, index) => index !== indexToRemove))
    }

    const inputfield = (e) => {
        setvalue(e.target.value);
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
            <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-center text-indigo-700">📝 Todo List</h2>

                <ul className="space-y-2 mb-4 max-h-64 overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-300">
                    {task.map((task, index) => (
                        <li
                            key={index}
                            className="bg-gray-50 px-4 py-2 rounded-md flex justify-between items-center shadow-sm hover:shadow-md"
                        >
                            <span className="text-gray-800">{task}</span>
                            <button
                                onClick={() => removetask(index)}
                                className="bg-red-500 hover:bg-red-600 text-white text-sm px-3 py-1 rounded transition"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="flex gap-2">
                    <input
                        onChange={inputfield}
                        value={value}
                        type="text"
                        placeholder="Add new task..."
                        className="flex-grow p-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    />
                    <button
                        onClick={addtask}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded transition"
                    >
                        ADD
                    </button>
                </div>
            </div>
        </div>

    )
}

export default To_do_list
