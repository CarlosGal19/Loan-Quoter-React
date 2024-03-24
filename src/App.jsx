import { useState } from 'react'
import Header from "./components/Header";
import Button from "./components/Button";
import formatMoney from "./utils";

function App() {
  // The useState function returns an array with two elements. The first element is the current state value, and the second element is a function that allows you to update it.
  const [amount, setAmount] = useState(10000);
  // const [term, setTerm] = useState(6);

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

        <Button
          operator = '-'
          func = {handleClickDecrease}
        />

        <Button
          operator = '+'
          func = {handleClickIncrease}
        />
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
      <p className='text-center my-10 text-5xl font-extrabold text-indigo-600'>{formatMoney(amount)}</p>

      <h2 className='text-2xl font-extrabold text-gray-500 text-center'>
        Choose a <span className='text-indigo-600'>term</span> to pay
      </h2>

      <select className='mt-5 w-full p-2 bg-white border border-gray-300 rounded-lg text-center text-xl font-bold text-gray-500'>
        <option value="6">6 months</option>
        <option value="12">12 months</option>
        <option value="24">24 months</option>
      </select>
    </div>
  )
}

export default App
