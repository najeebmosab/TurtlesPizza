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
      if (falg) {
        const newDataPizza = [...DataPizza, data];
        setDataPizza(newDataPizza);
        console.log(newDataPizza);
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
        <div className='continerCardExtra'>
          {
            DataPizza.map(data => {
              return (
                <div className='cardExtra'>
                  <h2>{data.name}</h2>
                  <img src={data.img} width={"50px"} height={"50px"} alt="" />
                </div>
              )
            })
          }
        </div>
        <div>
          <h2 className={DataPizza.length === 5 ? 'redText' : 'block'}>Sory Can't add more than 5 Extra</h2>
        </div>
      </div>
    </>)
}

export default App
