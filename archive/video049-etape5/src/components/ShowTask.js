/*
Exemple 1
export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  
  return (
    <section className="showTask">
      
      <div className="head">
          <div> 
            <span className="title"> Todo </span>
            <span className="count"> {tasklist.length} </span>
          </div>
          <button className="clearAll" onClick={ () => setTasklist([]) }> Clear All </button>
      </div>

      
      <ul>
        { tasklist.map((task) => (
          <li key={task.id}>
              <p>
                <span className="name"> {task.name} </span>
                <span className="time"> {task.time} </span>
              </p>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
          </li>
        )) }
      </ul>

    </section>
  )
}
----------------
//* On commence par ajouter la fonctionnalité delete & edit qui prendre l'info de task id
  return (
    <section className="showTask">
      //* Ici, les éléments sont le même dans l'exemple 1
      <div className="head"> ... </div>

      
      <ul>
        { tasklist.map((task) => (
          <li key={task.id}>
              <p>
                <span className="name"> {task.name} </span>
                <span className="time"> {task.time} </span>
              </p>

              //* On ajoute ici
              //* le task.id est celui qui est dans le ul, propriété de scope (vous pouvez aussi appelez task par todo)
              <i onClick={ () => handleEdit(task.id)} className="bi bi-pencil-square"></i>
              <i onClick={ () => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        )) }
      </ul>

    </section>
  )
  //* Dans le prochain exemple on verra la création des fonctions handleEdit & handleDelete
----------------

//* For delete, Je besoin de faire les filtres des éléments dans mon tasklist (liste de tâche)
  //* cad on va sélectionner toutes les tâches et on va seulement desélectionner celui qu'on choisi pour le supprimer
  //* Par exemple, on sélectionner la tâche 1 - 4, puis on garde la tâche 3 parmi les 4 pour le supprimer
  //* La référence est fait à partir de l'id 
export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  
  const handleEdit = (id) => {
    console.log("Correct")
  }

  const handleDelete = (id) => {
    const updateTaskList = tasklist.filter(task => task.id !== id);
    setTasklist(updateTaskList);
  }

  return (...)
}
----------------

//* Pour edit, on fait la même chose que delete seulement on va chercher trouver l'id exact ou qui correspond
//* C'est pourquoi on fait " === " et une fois trouvé, on le prend pour le modifier avec setTask()
export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  
  const handleEdit = (id) => {
    const editTaskList = tasklist.find(task => task.id === id)
    setTask(editTaskList)
  }

  const handleDelete = (id) => {
    const updateTaskList = tasklist.filter(task => task.id !== id);
    setTasklist(updateTaskList);
  }

  return (...)
}
*/

// Le code complet 
export const ShowTask = ({tasklist, setTasklist, task, setTask}) => {
  
  const handleEdit = (id) => {
    const editTaskList = tasklist.find(task => task.id === id);
    setTask(editTaskList);
  }

  const handleDelete = (id) => {
    const deleteTaskSelected = tasklist.filter(task => task.id !== id);
    setTasklist(deleteTaskSelected);
  }

  return (
    <section className="showTask">
      
      <div className="head">
          <div> 
            <span className="title"> Todo </span>
            <span className="count"> {tasklist.length} </span>
          </div>
          <button className="clearAll" onClick={ () => setTasklist([]) }> Clear All </button>
      </div>

      
      <ul>
        { tasklist.map((task) => (
          <li key={task.id}>
              <p>
                <span className="name"> {task.name} </span>
                <span className="time"> {task.time} </span>
              </p>
              <i onClick={ () => handleEdit(task.id)} className="bi bi-pencil-square"></i>
              <i onClick={ () => handleDelete(task.id)} className="bi bi-trash"></i>
          </li>
        )) }
      </ul>

    </section>
  )
}
