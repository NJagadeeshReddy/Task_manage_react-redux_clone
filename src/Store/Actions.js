import { ADD_TASK,EDIT_TASK,DELETE_TASK } from "./types";

export const addTask = (task) => {
    return {
      type: ADD_TASK,
      payload: task,
    };
  }; 
  
  export const editTask = (editIndex, task) => {
    return {
      type: EDIT_TASK,
      payload: { editIndex, task },
    };
  };
  
  export const deleteTask = (index) => ({
    type: DELETE_TASK,
    payload: index
  });