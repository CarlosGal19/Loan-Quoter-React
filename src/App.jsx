import { useState } from 'react'
import Header from "./components/Header";

function App() {
  // The useState function returns an array with two elements. The first element is the current state value, and the second element is a function that allows you to update it.
  const [amount, setAmount] = useState(10000);

  const min = 0;
  const max = 20000;
  const step = 100;

  // Handle is a function that will be called when the input value changes. It is a standard name for this kind of function.
  function handleChange(e) {
    setAmount(e.target.value);
  }

  function handleClickIncrease() {
    const newValue = parseInt(amount) + parseInt(step);
    console.log(newValue)
    if (newValue > max) {
      alert('The value cannot be more than 20000');
      return;
    }
    setAmount(newValue);
  }

  function handleClickDecrease() {
    const newValue = amount - step;
    if (newValue < min) {
      alert('The value cannot be less than 0');
      return;
    }
    setAmount(newValue);
  }

  return (
    <div className="my-20 max-w-lg mx-auto bg-white shadow p-10">
      <Header />

      <div className='flex justify-between my-8'>
        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickDecrease}>-

        </button>

        <button
          type='button'
          className='h-10 w-10 flex items-center justify-center font-bold text-white text-2xl bg-lime-500 rounded-full
          hover:outline-none hover:ring-2 hover:ring-offset-2 hover:ring-lime-500'
          onClick={handleClickIncrease}>+
        </button>
      </div>

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
