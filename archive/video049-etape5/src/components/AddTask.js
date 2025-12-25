//* Ici, nous allons seulement modifier le bouton
//* Le bouton sera soit update, soit add
export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    if(task.id) {
      const date = new Date();
      const updatedTaskList = tasklist.map((todo) => (
          todo.id === task.id ? {
          id: task.id,
          name: task.name, 
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
        } : todo
      ));
      setTasklist(updatedTaskList)

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
            <input type="text" name="task" placeholder="Add your task" value={task.name || ""}
            autoComplete="off" maxLength="30" onChange={e => setTask({...task, name: e.target.value})} />
            <button type="submit"> { task.id ? "Update" : "Add" } </button>
        </form>
    </section>
  )
}
