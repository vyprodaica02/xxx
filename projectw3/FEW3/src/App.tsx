// src/App.tsx
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Data/counterSlice";
import { RootState } from "./Store/store";

function App() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
