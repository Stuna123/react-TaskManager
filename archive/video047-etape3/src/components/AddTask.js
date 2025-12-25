/*
//* On rajoute nos éléments 
export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const newTask = 
      {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
      }
      setTasklist([...tasklist, newTask]) 
      e.target.task.value = "";
  }
  
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" maxLength="30" />
            <button type="submit"> Add </button>
        </form>
    </section>

  )
}
----------------

//* On ajoute une condition quand on clic sur l'id pour avoir deux choses
//* Soit on recupère les infos soit on remet tels quel

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => {
    e.preventDefault();

    //* On ajoute dans le if
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
    } else {
      ...
    }

    const date = new Date();
    const newTask = 
      {
        id: date.getTime(), 
        name: e.target.task.value, 
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
      }
      setTasklist([...tasklist, newTask]) 
      e.target.task.value = "";
    }
  }

  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" maxLength="30" />
            <button type="submit"> Add </button>
        </form>
    </section>

  )
}
----------------

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
    }
    //* On ajoute dans le else rien puisque rien ne change
    else {
      const date = new Date();
      const newTask = 
        {
          id: date.getTime(), 
          name: e.target.task.value, 
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}` 
        }
        setTasklist([...tasklist, newTask]) 
        e.target.task.value = "";
    }
  }
  const date = new Date();
  const newTask = { ... }
  
  return (
    <section className="addTask">
        <form onSubmit={handleSubmit}>
            <input type="text" name="task" autoComplete="off" maxLength="30" />
            <button type="submit"> Add </button>
        </form>
    </section>
  )
}
----------------

//* On ajoute onChanged puisque l'input subit des modifications et la valeur qu'on recupère

export const AddTask = ({tasklist, setTasklist, task, setTask}) => {

  const handleSubmit = (e) => { ... }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
          < input type="text" name="task" placeholder="Add your task" value={task.name}
          autoComplete="off" maxLength="30" 
          onChange={e => setTask({...task, name: e.target.value})} />
          <button type="submit"> Add </button>
      </form>
    </section>
  )
}
----------------
*/

//* Il y aura un problème dans ce code car l'input ne sera pas vide après les écrits
//* On verra la solution dans l'étape 4
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
            <input type="text" name="task" placeholder="Add your task" value={task.name}
            autoComplete="off" maxLength="30" onChange={e => setTask({...task, name: e.target.value})} />
            <button type="submit"> Add </button>
        </form>
    </section>
  )
}
