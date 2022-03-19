import {
  ADD_TASK,
  CHANGE_THEME,
  DELETE_TASK,
  DONE_TASK,
  EDIT_TASK,
  UPDATE_TASK,
} from "../types/TodoListType";

export const addTaskAction = (newTask) => {
  return {
    type: ADD_TASK,
    newTask,
  };
};
export const changeTheme = (newTheme) => {
  return {
    type: CHANGE_THEME,
    newTheme,
  };
};
export const doneTaskAction = (taskID) => {
  return {
    type: DONE_TASK,
    taskID,
  };
};
export const deleteTaskAction = (taskID) => {
  return {
    type: DELETE_TASK,
    taskID,
  };
};
export const editTaskAction = (task) => {
  return {
    type: EDIT_TASK,
    task,
  };
};
export const updateTaskAction = (task) => {
  return {
    type: UPDATE_TASK,
    task,
  };
};
