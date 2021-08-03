import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { add_increment, remove_decrement } from "./redux/action.js";
export default function App() {
  const select = useSelector((state) => state.reduxReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Increment/Decrement Counter</h1>
      <h3>Using React and Redux</h3>
      <div className="btnStyle">
        <button
          onClick={() => {
            dispatch(add_increment());
          }}
        >
          +
        </button>
        <p>{select}</p>
        <button
          onClick={() => {
            dispatch(remove_decrement());
          }}
        >
          -
        </button>
      </div>
    </div>
  );
}
