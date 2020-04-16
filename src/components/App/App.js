import React from "react";
import CreateTask from "../CreateForm/CreateForm";
import TaskList from "../TaskList/TaskList";
import styles from "./App.module.css";
import { v4 as uuidv4 } from "uuid";
export default class App extends React.Component {
  state = {
    tasks: [],
    filter: "",
  };

  onTaskGet = (newTask) => {
    const taskToAdd = { ...newTask, id: uuidv4() };
    this.setState((state) => ({
      tasks: [...state.tasks, taskToAdd],
    }));
  };
  onDeleteTodo = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  };

  onPriorityChange = (id, priority) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, priority } : task
      ),
    }));
  };

  onCompleteChange = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      ),
    }));
  };
  render() {
    const { tasks } = this.state;
    return (
      <div className={styles.wrapper}>
        <CreateTask taskAdd={this.onTaskGet} />
        <TaskList
          tasks={tasks}
          onDeleteTodo={this.onDeleteTodo}
          priorityChange={this.onPriorityChange}
          completeChange={this.onCompleteChange}
        />
      </div>
    );
  }
}
