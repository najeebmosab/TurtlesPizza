import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { data } from "./Components/Data"
import { Turtles } from "./Components/Turtles"
function App() {
  const [turtles, setTurtles] = useState(data);
  const [DataPizza, setDataPizza] = useState([]);

  function handlerDataPizza(data) {
    let falg = true;
    if (DataPizza.length < 5) {
      for (let i = 0; i < DataPizza.length; i++) {
        if (data.name == DataPizza[i]) {
          falg = false;
          break;
        }
      }
      // DataPizza.forEach((d)=> {if(d.name == data.name){falg=false}});
      if (falg) {
        DataPizza.push(data)
        // console.log();
        setDataPizza(DataPizza);
      }

    }
    // console.log("DataPizza",setDataPizza());
  }
  console.log(turtles);
  return (
    <>
      <div className='turtlesContainer'>
        {turtles.map((turtle, idx) => {
          return <Turtles turtleData={turtle} DataPizzaToAdd={handlerDataPizza} key={idx} />
        })}

          <p> Length:{DataPizza.length}</p>
        <div>
          <h2 className={DataPizza.length === 5 ? 'redText' : 'block'}>Sory Can't add more than 5 Extra</h2>
        </div>
      </div>
    </>)
}

export default App
