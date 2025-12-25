import { useEffect, useRef } from "react";

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const inputRef = useRef(null);

  useEffect(() => {
    if (task.id) {
      inputRef.current.scrollIntoView({ behavior: "smooth" });
      inputRef.current.focus();
    }
  }, [task])

  const handleSubmit = (e) => {
    e.preventDefault();

    const emptyTask = e.target.task.value; 
    if(emptyTask === "") {
      alert("Please, you must write something about the task !")
      return ;
    }

    if(task.id) {
      const date = new Date();
      const updated = tasklist.map((todo) => (
          todo.id === task.id ? {
          id: task.id,
          name: task.name, 
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
        } : todo
      ));
      setTasklist(updated)

      // Reset the input add
      setTask({})
    } else {
    const date = new Date();
    const newTask = 
      {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
      }
      setTasklist([...tasklist, newTask]) 
      setTask({})
    }
  }
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input 
            ref={inputRef}
            type="text" 
            name="task" 
            placeholder="Add task..." 
            value={task.name || ""}
            autoComplete="off" maxLength="30" 
            onChange={e => setTask({...task, name: e.target.value})} />
            <button type="submit"> { task.id ? "Update" : "Add" } </button>
        </form>
    </section>
  )
}