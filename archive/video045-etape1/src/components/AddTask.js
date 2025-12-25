export const AddTask = () => {
  return (
    <section className="addTask">
        <div>AddTask</div>
        <form>
            <input type="text" name="task" autoComplete="off" maxLength="30" />
            <button type="submit"> Add </button>
        </form>
    </section>

  )
}