export const ShowTask = ({tasklist, setTasklist, task, setTask, search, setSearch, sortType, setSortType}) => {
  
  // Edit
  const handleEdit = (id) => {
    const editTaskList = tasklist.find(task => task.id === id);
    setTask(editTaskList);
  }

  // Delete
  const handleDelete = (id) => {
    if(window.confirm("Do you really want to delete this task ?")) {
      const deleteTaskSelected = tasklist.filter(task => task.id !== id);
      setTasklist(deleteTaskSelected);
    }
  }

  const handleDeleteAll = () => {
    if (!tasklist.length) return;

    if(window.confirm("Do you really want to delete all tasks ?")) {
      setTasklist([]);
    }
  }

  // Drag & Drop
  const handleDragStart = (e, index) => {
    e.dataTransfer.setData("taskIndex", index)
  }
  
  const handleDropStart = (e, index) => {
    const draggedIndex = e.dataTransfer.getData("taskIndex");
    const updatedList = [...tasklist];

    const draggedItem = updatedList.splice(draggedIndex, 1);
    updatedList.splice(index, 0, draggedItem[0]);

    setTasklist(updatedList);
  }

  
    //* Si on utilise Tri, alors drag et drop ne marchera pas.
    //* Tri
    const sortedTasks = [...tasklist].sort((a,b) => {
      if(sortType === "newest") return b.id - a.id;
      if(sortType === "oldest") return a.id - b.id;
      if(sortType === "az") return a.name.localeCompare(b.name);

      return 0;
    })
  
  // Filtre / recherche
  const filteredTasks = sortedTasks.filter(task => 
    task.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <section className="showTask">
      <input type="text" placeholder="Search... " onChange={(e) => setSearch(e.target.value)} />
      <div className="head">
          <div> 
            <span className="title"> Todo </span>
            <span className="count"> {tasklist.length} </span>
          </div>
          <button className="clearAll" onClick={ () => handleDeleteAll() }> Clear All </button>
      </div>
      
      <ul>
        { filteredTasks.map((task, index) => (
          <li 
            key={task.id} 
            draggable 
            onDragStart={(e) => handleDragStart(e, index)} 
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => handleDropStart(e, index)}
            >
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