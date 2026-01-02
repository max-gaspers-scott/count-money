import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [numbers, setNumbers] = useState([]);
  const [total, setTotal] = useState(0);

  const [isBills, setIsBills] = useState(true);


  let add_id = 0;
  let dig_one = {been_set: false, num:0};
  let dig_two = {been_set: false, num:0};

  let add_one = () => {
    setNumbers(
      [
        ...numbers,
        {id: add_id++, number: 1}
      ]
    );
  }

  let add_100 = () => {
    setNumbers(
      [
        ...numbers,
        {id: add_id++, number: 100}
      ]
    )
  }

  let set_dig = (num) => {
    let big_moltiple = 0;
    let little_moltiple = 0;
    if (isBills) {
      big_moltiple = 10;
      little_moltiple = 1;
    }else {
      big_moltiple = 0.1;
      little_moltiple = 0.01;
    }

    if(dig_one.been_set){
      dig_two.number = num;
      console.log(dig_two);
      setNumbers(
        [
          ...numbers,
          {id: add_id++, number: (dig_one.number * big_moltiple + dig_two.number * little_moltiple)}
        ]
      )
      dig_one.been_set = false;
    }else {
      dig_one.number = num;
      dig_one.been_set = true;
    }
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


  let set_bills = () => {
    setIsBills(true);
  }

  let set_coins = () => {
    setIsBills(false);
  }

  return (
    <div className="App">
      {numbers.map(number => (
          <p key={number.id}>{number.number}</p>
          ))}
      <div className="container mx-auto p-4">
        {total}
      </div>

      { isBills ? (
      <div className="mt-8 flex justify-around">
          <button onClick={add_one} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            $1
          </button>
          <button onClick={add_100} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            $100
          </button>
      </div> ) : (
      <div className="mt-8 flex justify-around">
          <button onClick={add_one} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            $1
          </button>
      </div>
      )
      }

      <div className="flex-row justify-around">
        <div className="flex justify-around">
          <button onClick={() => set_dig(1)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">1</button>
          <button onClick={() => set_dig(2)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">2</button>
          <button onClick={() => set_dig(3)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">3</button>
        </div>
      </div>

      <div className="flex-row justify-around">
        <div className="flex justify-around">
          <button onClick={() => set_dig(4)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">4</button>
          <button onClick={() => set_dig(5)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">5</button>
          <button onClick={() => set_dig(6)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">6</button>
        </div>
      </div>

      <div className="flex-row justify-around">
        <div className="flex justify-around">
          <button onClick={() => set_dig(7)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">7</button>
          <button onClick={() => set_dig(8)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">8</button>
          <button onClick={() => set_dig(9)} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">9</button>
        </div>
      </div>


      <div className="flex justify-around">

          <button onClick={set_bills} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">bills</button>
          <button onClick={set_coins} className="bg-blue-500 w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">coins</button>

      </div>

   </div>
  );
}

export default App;
