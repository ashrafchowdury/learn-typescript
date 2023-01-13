import { useState, useEffect } from "react";

const Todo = () => {
  const [input, setinput] = useState<string>("");
  const [todos, settodos] = useState<string[]>([]);

  const handleAddToDo = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (!input) {
      alert("Add your task first!");
    } else {
      settodos([...todos, input]);
      setinput("");
    }
  };
  function handleTrash(data: string) {
    const deleteItem = todos.filter((val) => val !== data);
    settodos(deleteItem);
  }
  return (
    <main className="w-[600px]">
      <h1>TODO</h1>
      <form onSubmit={handleAddToDo}>
        <input
          type="text"
          placeholder="Write Task"
          className=""
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />
        <button>ADD</button>
      </form>
      <section>
        {todos.map((value, ind) => {
          return (
            <div
              key={ind}
              className=" flex justify-between items-center text-xl my-4"
            >
              {value}
              <div
                className=" w-4 h-4 rounded-full bg-red-500 cursor-pointer"
                onClick={() => handleTrash(value)}
              >
                {" "}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Todo;
