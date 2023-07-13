import { PureComponent } from "react";
import "../../Styles/addTask.scss"

class AddTaskComponent extends PureComponent {
  taskData = () => {
    const { taskList, HandleEdit, handleDelete } = this.props;
    return (
      taskList &&
      taskList.map((data, index) => (
        <div className="list-data" key={index}>
          <div className="item">
            <div>
              <h4 >Title: {data.TaskName}</h4>
              <p>Content: {data.Description}</p>
            </div>
            <div>
              <button
                value={index}
                onClick={(e) => HandleEdit(e.target.value)}
                className="btn-Edit">
                Edit
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="btn-Delete">
                Delete
              </button>
            </div>
          </div >
        </div>
      ))
    );
  };

  render() {
    const {
      handleClick,
      createTask,
      handleChange,
      NewTask,
      handleSave,
      error,
      error2,
      error3,
    } = this.props;
    return (
      <>
        <div className="header">
          <h2> <i>Task Management App</i> </h2>
          <button className="addtask-btn" onClick={handleClick}>
            Create Task
          </button>
        </div>
        <div className={createTask ? "Addtask-container" : "hidden"}>
          <div className="create-task">
            <div className="create-title">
              <u> NEW TASK</u>
              {error && <p className="error-message">{error}</p>}
              <p>Title</p>
              <input
                type="text"
                className="create-input"
                value={this.props.taskName === "" ? "" : this.props.taskName}
                onChange={handleChange}
                name="taskName"
                maxLength={20}
              />
              {error2 && <p className="error-message2">{error2}</p>}

            </div>
            <div className="create-title">
              <p>Content </p>
              <textarea
                type="text"
                maxLength={80}
                value={
                  this.props.description === "" ? "" : this.props.description
                }
                className="create-input"
                onChange={handleChange}
                name="description"
              />
              {error3 && <p className="error-message3">{error3}</p>}

            </div>
            <div className="btn">
              <button className="btn-save" onClick={NewTask}>
                Save
              </button>
              <button
                className="btn-close"
                onClick={handleClick}
              >
                Close
              </button>
            </div>
          </div>
        </div>
        {this.taskData()}
        <div className={this.props.edit ? "" : "hidden"}>
          <div className="edit-item">
            <div className="edit-content">
              <u>Update Task</u>
              <p>Title</p>
              <textarea
                name="taskName"
                className="edit-input"
                onChange={handleChange}
                value={this.props.taskName}
                maxLength={80}
              >
                {this.props.taskName && this.props.taskName}
              </textarea>
            </div>
            <div className="edit-content">
              <p>Content</p>
              <textarea
                onChange={handleChange}
                maxLength={80}
                className="edit-input"
                name="description"
                value={this.props.description}
              >
                {this.props.description && this.props.description}
              </textarea>
            </div>
            <div className="btn">
              <button
                value={this.props.index}
                onClick={(e) => handleSave(e)}
                className="btn-save"
              >
                Save
              </button>
              <button
                onClick={this.props.handleEditt}
                className="btn-cancel"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AddTaskComponent;