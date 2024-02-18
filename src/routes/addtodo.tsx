import React from "react";
import { useNavigate } from "react-router-dom";

export default function AddTodo() {
  const [todo, setTodo] = React.useState<string>("");
  const nav = useNavigate();

  const addTodo = (e: any) => {
    e.preventDefault();
    console.log(todo);
  };

  return (
    <div className="p-4">
      <button
        className="text-sm p-2 px-4 bg-slate-500 text-white rounded-lg my-4 hover:bg-slate-400 active:bg-slate-600"
        onClick={() => {
          nav("/");
        }}
      >
        Go back
      </button>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
          placeholder="Enter todo"
        />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
