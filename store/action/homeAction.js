import axios from "axios"
import { baseUrl } from "store/api"

export const Types = {
  GET_DATA: "GET_DATA",
  ADD_DATA: "ADD_DATA",
  EDIT_DATA: "EDIT_DATA",
  FINISH_DATA: "FINISH_DATA",
  DELETE_DATA: "DELETE_DATA",
  LOADING: "LOADING",
  ERROR: "ERROR"
}

export const fetchData = () => dispatch => {
  dispatch({ type: Types.LOADING, payload: true });
  axios({
    method: "get",
    url: `${baseUrl}`
  })
    .then(({ data }) => {
      dispatch({ type: Types.GET_DATA, payload: data });
      dispatch({ type: Types.LOADING, payload: false });
    })
    .catch(err => dispatch({ type: Types.LOADING, payload: 'Error' }))
}

export const addTask = (payload) => dispatch => {
  dispatch({ type: Types.ADD_DATA, payload: payload })
}

export const updateTask = (payload) => dispatch => {
  dispatch({ type: Types.EDIT_DATA, payload: payload })
}

export const endDataHandler = (payload) => dispatch => {
  dispatch({ type: Types.FINISH_DATA, payload: payload })
}

export const deleteTask = (payload) => dispatch => {
  console.log(payload);
  dispatch({ type: Types.DELETE_DATA, payload: payload })
}