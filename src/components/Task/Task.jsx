import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./Task.module.scss";
import {
  createTask,
  getTasksUser,
  updateTask,
} from "../../features/task/taskSlice";

const Task = () => {
  const initialState = {
    title: "",
    description: "",
    status: "pending",
  };

  const { tasks } = useSelector((state) => state.task);
  const { user } = useSelector((state) => state.auth);
  const [formData, setFormData] = useState(initialState);
  const { title, description, status } = formData;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getTasksUser());
    }
  }, [dispatch, user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createTask(formData));
    dispatch(getTasksUser());
    setFormData(initialState);
  };

  const handleStatusChange = async (task, newStatus) => {
    await dispatch(
      updateTask({ taskId: task._id, task: { ...task, status: newStatus } })
    );
    dispatch(getTasksUser());
  };

  return (
    <div className={styles.form}>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" className={styles.button}>
          Add Task
        </button>
      </form>

      <div style={{ marginTop: "2rem" }}>
        <h2>Tus tareas</h2>
        {tasks && tasks.length > 0 ? (
          <ul>
            {tasks.map((task) => (
              <li key={task._id || task.id}>
                <strong>{task.title}</strong> - {task.description}{" "}
                <span>({task.status})</span>
                <select
                  value={task.status}
                  onChange={(e) => handleStatusChange(task, e.target.value)}
                  style={{ marginLeft: "1rem" }}
                >
                  <option value="pending">Pending</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                </select>
              </li>
            ))}
          </ul>
        ) : (
          <p>No tienes tareas aún.</p>
        )}
      </div>
    </div>
  );
};

export default Task;
