import {
  increment,
  decrement,
  reset,
} from "../../redux/counter/counter-actions";
import { useSelector, useDispatch } from "react-redux";
function Counter() {
  const value = useSelector((state) => state.counter.value);
  const step = useSelector((state) => state.counter.step);
  const dispatch = useDispatch();
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => dispatch(increment(step))}>add {step}</button>
      <button onClick={() => dispatch(decrement(step))}>subtract {step}</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </div>
  );
}

export default Counter;
