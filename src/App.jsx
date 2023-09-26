import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);
  const addState = () => {
    setCount(count + 1);
  };
  const minusState = () => {
    setCount(count - 1);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <span className=" text-center py-2 text-3xl font-bold mt-10">Layout</span>
      <div className="flex  gap-4 mt-8 justify-center w-full">
        <div className="w-16 h-16 rounded bg-gray-400"></div>
        <div className="w-16 h-16 rounded bg-gray-400"></div>
        <div className="w-16 h-16 rounded bg-gray-400"></div>
        <div className="w-16 h-16 rounded bg-gray-400"></div>
      </div>
      <div className="grid gap-4 grid-cols-3 mt-10">
        <div className="w-16 h-16 rounded bg-gray-400"></div>

        <div className="w-16 h-16 rounded bg-gray-400"></div>

        <div className="w-16 h-16 rounded bg-gray-400"></div>

        <div className="w-16 h-16 rounded bg-gray-400"></div>
      </div>

      <span className=" text-center py-2 text-3xl font-bold mt-10 mb-10">
        Тоолуур: {count}
      </span>
      <div className="flex gap-4">
        <button className="px-4 py-2 bg-green-400 rounded" onClick={addState}>
          {" "}
          Нэмэх
        </button>

        <button className="px-4 py-2 bg-red-400 rounded" onClick={minusState}>
          {" "}
          Хасах
        </button>
      </div>
    </div>
  );
}

export default App;
