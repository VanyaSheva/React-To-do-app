import React from "react";
import Task from "../Task/Task";
import styles from "./TaskList.module.css";
const TaskList = ({ tasks, onDeleteTodo, priorityChange, completeChange }) => (
  <ul className={styles.list}>
    {tasks.map((task) => (
      <li key={task.id} className={styles.listItem}>
        <Task
          id={task.id}
          text={task.text}
          done={task.done}
          priority={task.priority}
          onDelete={() => onDeleteTodo(task.id)}
          onPriority={priorityChange}
          completeChange={() => completeChange(task.id)}
        />
      </li>
    ))}
  </ul>
);

export default TaskList;
