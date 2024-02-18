import * as React from "react";
import { useNavigate } from "react-router-dom";

export default function Root() {
  const [todos, setTodos] = React.useState<string[]>([]);
  const nav = useNavigate();

  const fetchTodos = async () => {};

  React.useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div className="p-4">
      <h1 className="font-bold text-lg"> Todo App</h1>
      <button
        className="text-sm p-2 px-4 bg-slate-500 text-white rounded-lg my-4 hover:bg-slate-400 active:bg-slate-600"
        onClick={() => {
          nav("/addtodo");
        }}
      >
        Add new todo
      </button>

      <div className="mt-2">
        {todos.length === 0 ? (
          <h3 className="">No Todos</h3>
        ) : (
          <ul>
            {todos.map((todo, index) => (
              <li key={index}>
                <span className="ml-4 mr-2">•</span>
                {todo}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
