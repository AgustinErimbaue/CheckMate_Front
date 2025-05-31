import { useState } from "react";
import styles from "./Task.module.scss";
const Task = () => {
  const initialState = {
    title: "",
    description: "",
    status: "pending",
  };
  const [formData, setFormData] = useState(initialState);
  const { title, description, status } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormData(initialState);
  };

  return (
    <div className={styles.form}>
      <form>
        <input
          type="text"
          name="title"
          value={title}
          onChange={handleChange}
          placeholder="Task Title"
          className={styles.input}
        />
        <textarea
          name="description"
          value={description}
          onChange={handleChange}
          placeholder="Task Description"
          className={styles.textarea}
        />
        <select
          name="status"
          value={status}
          onChange={handleChange}
          className={styles.select}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleSubmit} className={styles.button}>
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Task;
