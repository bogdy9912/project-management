import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleClick() {
    if (task.trim() !== "") {
      onAdd(task);
      setTask("");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={task}
        onChange={handleChange}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />

      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add task
      </button>
    </div>
  );
};

export default NewTask;
