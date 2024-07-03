import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import {Display} from "./components/Display/Display";
import {useEffect, useState} from "react";

function App() {

  const [state, setState] = useState('0');

  const signArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

  useEffect(() => {
      if (state.length === 0) setState('0');
  }, [state])

  const updateStateString = (sign) => {
        if(state === '0' && signArray.includes(sign)) {
            return setState('' + String(sign));
        }

        if(sign === '=') return count();

        if(sign === '⇽') {
            return setState(state.slice(0, state.length - 1))
        }

        if(isNaN(Number(state[state.length - 1])) && isNaN(Number(sign))) return;

        setState(state + sign);
  }

  const count = () => {

      let numbers = state.split(/[+-]/gm);
      const operators = state.split(/\d{0,}/gm).filter(el => el !== '');
      let result = +numbers[0];
      numbers = numbers.slice(1, numbers.length);

      for (let i = 0; i < numbers.length; i++) {
          console.log(i)
          console.log(numbers.length)
          if(operators[i] === '+') result += +numbers[i];
          else{
              result -= +numbers[i];
          }

      }

      console.log(result);

      setState(result);
  }

  return (
    <div className="App">
        <Display inputString={state}/>
        <ButtonGroup inputHandler={updateStateString} />
    </div>
  );
}

export default App;
