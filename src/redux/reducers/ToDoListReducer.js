import { ToDoListPrimaryTheme } from "../../JSS_StyledComponent/BaiTapStyledTodoList/ToDoListTheme/themes/ToDoListPrimaryTheme";
import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../types/TodoListType";
import { ManageTheme } from "../../JSS_StyledComponent/BaiTapStyledTodoList/ToDoListTheme/themes/ManageTheme";
const initialState = {
  Theme: ToDoListPrimaryTheme,
  ToDoList: [
    { id: "task-1", name: "Task-1", done: true },
    { id: "task-2", name: "Task-2", done: false },
    { id: "task-3", name: "Task-3", done: true },
    { id: "task-4", name: "Task-4", done: false },
  ],
  TaskEdit: { id: 1, name: "Task 5", done: false },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK: {
      if (action.newTask.name.trim() === "") {
        alert("Vui lòng nhập task");
        return { ...state };
      }
      let newToDoTask = [...state.ToDoList];
      let index = newToDoTask.findIndex(
        (task) => task.name === action.newTask.name
      );
      if (index !== -1) {
        alert("Task này đã tồn tại");
        return { ...state };
      } else {
        newToDoTask.push(action.newTask);
        state.ToDoList = newToDoTask;
        return { ...state };
      }
    }
    case CHANGE_THEME: {
      let theme = ManageTheme.find((theme) => theme.id == action.newTheme);
      if (theme) {
        state.Theme = theme.theme;
        return { ...state };
      }
    }
    case DONE_TASK: {
      let taskList = [...state.ToDoList];
      let index = taskList.findIndex((task) => task.id === action.taskID);
      if (index !== -1) {
        taskList[index].done = true;
      }
      return { ...state, ToDoList: taskList };
    }
    case DELETE_TASK: {
      let taskList = [...state.ToDoList];
      let newTaskAfterDeleting = taskList.filter(
        (task) => task.id !== action.taskID
      );
      return { ...state, ToDoList: newTaskAfterDeleting };
    }
    case EDIT_TASK: {
      console.log(action.task);
      return { ...state, TaskEdit: action.task };
    }
    case UPDATE_TASK: {
      let newTaskEdit = { ...state.TaskEdit, name: action.task };
      let NewToDoList = [...state.ToDoList];
      let index = NewToDoList.findIndex((item) => item.id === newTaskEdit.id);
      if (index !== -1) {
        NewToDoList[index] = newTaskEdit;
      }
      state.ToDoList = NewToDoList;
      return { ...state };
    }

    default:
      return { ...state };
  }
};
