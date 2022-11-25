import "./App.css";
import { useState, useReducer } from "react";
import Modal from "./Modal";
import { reducer } from "./reducer";

const intialValue = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

function App() {
  const [inputValue, setInputValue] = useState("");

  const [state, dispatch] = useReducer(reducer, intialValue);

  function closeModal() {
    dispatch({ type: "CLOSE_MODAL" });
  }

  function submitHandler(e) {
    e.preventDefault();

    const newItem = { id: Math.random().toString(), name: inputValue };
    if (!inputValue || inputValue.length === 0) {
      dispatch({ type: "NO_VALUE" });
    } else {
      dispatch({ type: "INPUT_ADDED", payload: newItem });
      setInputValue("");
    }
  }

  //console.log(state);
  return (
    <div>
      <h1>Form</h1>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter Your Text"
        />
        <button type="submit">Submit</button>
      </form>
      <ul>
        {state.people.map((person) => {
          return (
            <li key={person.id}>
              {person.name}
              <button
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", payload: person.id })
                }
                className="remove-btn"
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
