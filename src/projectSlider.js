import React, { useState } from 'react';
import Counter from './Counter';
import Toggle_text from './Toggle_text';
import Char_counter from './Char_counter';
import Show_hide_pass from './Show_hide_pass';
import To_do_list from './To_do_list';

const ProjectSlider = () => {
  const components = [
    { name: 'Counter', element: <Counter /> },
    { name: 'Toggle Your Text', element: <Toggle_text /> },
    { name: 'Char Counter', element: <Char_counter /> },
    { name: 'Show / Hide Pass', element: <Show_hide_pass /> },
    { name: 'To Do List', element: <To_do_list /> },
  ];

  const [index, setIndex] = useState(0);
  const length = components.length;

  const nextProject = () => {
    if (index < length - 1) setIndex(index + 1);
  };

  const prevProject = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 transition-all duration-500 ease-in-out">
      <h2 className="text-2xl font-bold mb-2 text-indigo-700">
        Task: {components[index].name}
      </h2>
      <h3 className="text-lg text-gray-600 mb-4">Project {index + 1} of {length}</h3>

      <div className="w-full max-w-2xl p-6 bg-white rounded-xl shadow-md transition duration-300 ease-in-out">
        {components[index].element}
      </div>

      <div className="flex gap-6 mt-8">
        <button
          onClick={prevProject}
          disabled={index === 0}
          className={`px-5 py-2 rounded shadow transition duration-200 ${
            index === 0
              ? 'bg-red-200 text-white cursor-not-allowed'
              : 'bg-red-500 text-white hover:bg-red-600'
          }`}
        >
          ⬅ Prev
        </button>

        <button
          onClick={nextProject}
          disabled={index === length - 1}
          className={`px-5 py-2 rounded shadow transition duration-200 ${
            index === length - 1
              ? 'bg-green-200 text-white cursor-not-allowed'
              : 'bg-green-500 text-white hover:bg-green-600'
          }`}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
};

export default ProjectSlider;
