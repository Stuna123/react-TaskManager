/**
 * Etape 1 
  *********
export const ShowTask = () => {
  
  const tasks = [{id: 10001, name: "TASK A", time: "2:09:00 AM 9/14/2030"}]
  
  return (
    <section className="showTask">
      ShowTask
      <div className="head">
          <div> 
            <span className="title"> Todo </span>
            <span className="count"> 0 </span>
          </div>
          <button className="clearAll"> Clear All </button>
      </div>

      <ul>
          <li>
              <p>
                <span className="name"> Task A </span>
                <span className="time"> 2:09:00 AM 9/14/2030 </span>
              </p>
              <i className="bi bi-pencil-square"></i>
              <i className="bi bi-trash"></i>
          </li>
      </ul>

    </section>
  )
}
----------
Dans l"étape 2, on fait un map pour retourner un loop du tableau
*/
export const ShowTask = () => {
  
  const tasks = [
    {id: 10001, name: "TASK A", time: "2:09:00 AM 9/14/2030"},
    {id: 10002, name: "TASK B", time: "2:09:00 AM 9/14/2030"},
    
  ]
  
  return (
    <section className="showTask">
      ShowTask
      <div className="head">
          <div> 
            <span className="title"> Todo </span>
            <span className="count"> 0 </span>
          </div>
          <button className="clearAll"> Clear All </button>
      </div>

      <ul>
        { tasks.map((task) => (
          <li>
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