import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import { Button } from "./ToDoListComponent/components/Button";
import { ContainerFluid } from "./ToDoListComponent/components/Container";
import { Dropdown } from "./ToDoListComponent/components/Dropdown";
import {
  Heading2,
  Heading3,
  Heading4,
} from "./ToDoListComponent/components/Heading";
import { Table, Th, Thead, Tr } from "./ToDoListComponent/components/Table";
import { TextField } from "./ToDoListComponent/components/TextField";
import { ToDoListDarkTheme } from "./ToDoListTheme/themes/ToDoListDarkTheme";
import { ToDoListLightTheme } from "./ToDoListTheme/themes/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "./ToDoListTheme/themes/ToDoListPrimaryTheme";
import { connect } from "react-redux";
import {
  addTaskAction,
  updateTaskAction,
} from "../../redux/actions/TodoListActions";
import { ManageTheme } from "./ToDoListTheme/themes/ManageTheme";
import { changeTheme } from "../../redux/actions/TodoListActions";
import { doneTaskAction } from "../../redux/actions/TodoListActions";
import { deleteTaskAction } from "../../redux/actions/TodoListActions";
import { editTaskAction } from "../../redux/actions/TodoListActions";
class BaiTapTodoList extends Component {
  state = {
    taskName: "",
    disabled: true,
  };
  renderToDo = () => {
    return this.props.ToDoList.filter((task) => !task.done).map(
      (task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.name}</Th>
            <Th style={{ textAlign: "right" }}>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i class="fa-solid fa-trash-can"></i>
              </Button>
              <Button
                onClick={() => {
                  this.setState(
                    {
                      disabled: false,
                    },
                    () => {
                      this.props.dispatch(editTaskAction(task));
                    }
                  );
                }}
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
              >
                <i class="fa-solid fa-check"></i>
              </Button>
            </Th>
          </Tr>
        );
      }
    );
  };
  renderToDoDone = () => {
    return this.props.ToDoList.filter((task) => task.done).map(
      (task, index) => {
        return (
          <Tr key={index}>
            <Th>{task.name}</Th>
            <Th style={{ textAlign: "right" }}>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
              >
                <i class="fa-solid fa-trash-can"></i>
              </Button>
            </Th>
          </Tr>
        );
      }
    );
  };
  renderTheme = () => {
    return ManageTheme.map((theme, index) => {
      return <option value={theme.id}>{theme.name}</option>;
    });
  };
  // componentWillReceiveProps(newProps) {
  //   console.log("this.props", this.props);
  //   console.log("newProps", newProps);
  //   this.setState({
  //     taskName: newProps.TaskEdit.name,
  //   });
  // }
  render() {
    return (
      <ThemeProvider theme={this.props.Theme}>
        <ContainerFluid>
          <Dropdown
            onChange={(e) => {
              let { value } = e.target;
              this.props.dispatch(changeTheme(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading2>TO DO LIST</Heading2>
          <Heading4 className="text-left">Task Name</Heading4>
          <TextField
            value={this.state.taskName}
            name="taskName"
            onChange={(e) => {
              this.setState(
                {
                  taskName: e.target.value,
                },
                () => {}
              );
            }}
            className=""
          ></TextField>
          {this.state.disabled ? (
            <Button
              onClick={() => {
                // Lấy dữ liệu từ input
                let newTask = this.state.taskName;
                let newToDo = {
                  id: Date.now(),
                  name: newTask,
                  done: false,
                };
                //Dispatch dữ liệu lên reducers
                this.setState(
                  {
                    taskName: "",
                  },
                  () => {
                    this.props.dispatch(addTaskAction(newToDo));
                  }
                );
              }}
              className="ml-3"
            >
              <i class="fa-solid fa-plus"></i>
              ADD TASK
            </Button>
          ) : (
            <Button
              disabled
              onClick={() => {
                // Lấy dữ liệu từ input
                let newTask = this.state.taskName;
                let newToDo = {
                  id: Date.now(),
                  name: newTask,
                  done: false,
                };
                //Dispatch dữ liệu lên reducers
                this.props.dispatch(addTaskAction(newToDo));
              }}
              className="ml-3"
            >
              <i class="fa-solid fa-plus"></i>
              ADD TASK
            </Button>
          )}
          {this.state.disabled ? (
            <Button
              disabled
              onClick={() => {
                this.props.dispatch(updateTaskAction(this.state.taskName));
              }}
              className="mr-20 mt-3"
            >
              <i class="fa-solid fa-upload"></i>
              UPDATE TASK
            </Button>
          ) : (
            <Button
              onClick={() => {
                let { taskName } = this.state;
                this.setState(
                  {
                    disabled: true,
                    taskName: "",
                  },
                  () => {
                    this.props.dispatch(updateTaskAction(taskName));
                  }
                );
              }}
              className="mr-20 mt-3"
            >
              <i class="fa-solid fa-upload"></i>
              UPDATE TASK
            </Button>
          )}

          <Heading3 className="mt-3">Task To Do</Heading3>
          <Table>
            <Thead>{this.renderToDo()}</Thead>
          </Table>
          <Heading3 className="mt-3">Task Completed</Heading3>
          <Table>
            <Thead>{this.renderToDoDone()}</Thead>
          </Table>
        </ContainerFluid>
      </ThemeProvider>
    );
  }
  componentDidUpdate(prevProps) {
    if (prevProps.TaskEdit.id !== this.props.TaskEdit.id) {
      this.setState({
        taskName: this.props.TaskEdit.name,
      });
    }
  }
}
const mapStateToProps = (state) => {
  return {
    Theme: state.ToDoListReducer.Theme,
    ToDoList: state.ToDoListReducer.ToDoList,
    TaskEdit: state.ToDoListReducer.TaskEdit,
  };
};
export default connect(mapStateToProps)(BaiTapTodoList);
