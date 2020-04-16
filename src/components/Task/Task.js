import React from "react";
import styles from "./Task.module.css";
const Task = ({
  text,
  priority,
  done,
  onDelete,
  onPriority,
  id,
  completeChange,
}) => {
  const style = done ? `${styles.done}` : `${styles.title}`;
  return (
    <>
      <label className={styles.label}>
        Done:
        <input type="checkbox" checked={done} onChange={completeChange} />
      </label>
      <p className={styles.title}>{text}</p>
      <p>{priority}</p>
      <select
        value={priority}
        className={styles.select}
        onChange={(e) => onPriority(id, e.target.value)}
      >
        <option value="low">Low</option>
        <option value="neutral">Neutral</option>
        <option value="high">High</option>
      </select>
      <button type="button" onClick={onDelete} className={styles.button}>
        Delete
      </button>
    </>
  );
};

export default Task;
