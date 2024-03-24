import { useState } from 'react'
import Header from "./components/Header";

function App() {
  // The useState function returns an array with two elements. The first element is the current state value, and the second element is a function that allows you to update it.
  const [amount, setAmount] = useState(10000);

  const min=0;
  const max=20000;
  const step=100;

  // Handle is a function that will be called when the input value changes. It is a standard name for this kind of function.
  function handleChange(e) {
    setAmount(e.target.value);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />
      <input
        type="range"
        className="w-full h-6 bg-gray-200 accent-lime-500 hover:accent-lime-600"
        onChange={handleChange}
        min={min}
        max={max}
        step={step}
        value={amount}
      />
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{amount}</p>
    </div>
  )
}

export default App
