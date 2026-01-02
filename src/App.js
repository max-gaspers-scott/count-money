import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [total, setTotal] = useState(0);


  let add_id = 0;

  let add_one = () => {
    setNumbers(
      [
        ...numbers,
        {id: add_id++, number: 1}
      ]
    );
  }

  let sum = () => {
    let sum = 0;
    numbers.map(number => sum += number.number);
    return sum;

  }
  useEffect(
    () => {
      setTotal(sum());
      console.log(total);
    }, [numbers]
  )

  return (

    <div className="App">
      {numbers.map(number => (
          <p key={number.id}>{number.number}</p>
          ))}
      <div className="container mx-auto p-4">
        {total}
      </div>
      <div className="mt-8 flex justify-around">
          <button onClick={add_one} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            add
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Button
          </button>
        </div>
   </div>
  );
}

export default App;
