import React from "react";
import styles from "./CreateForm.module.css";

export default class CreateForm extends React.Component {
  state = {
    text: "",
    priority: "low",
    done: false,
  };

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSelectChange = (event) => {
    this.setState({ priority: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    this.props.taskAdd(this.state);

    this.setState((state) => ({
      text: "",
      priority: "low",
      done: false,
    }));
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit} className={styles.form}>
        <h1 className={styles.title}>Create your ToDo!</h1>
        <input
          maxLength="60"
          required
          placeholder="Your task..."
          type="text"
          name="text"
          value={this.state.text}
          onChange={this.handleInputChange}
          className={styles.formInput}
        />
        <select
          value={this.state.priority}
          onChange={this.handleSelectChange}
          className={styles.selectInput}
        >
          <option value="low">Low</option>
          <option value="neutral">Neutral</option>
          <option value="high">High</option>
        </select>
        <button type="submit" className={styles.button}>
          Create Task
        </button>
      </form>
    );
  }
}
