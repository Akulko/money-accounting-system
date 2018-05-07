import axios from "axios";
export const setData = data => ({ type: "SET_DATA", payload: { data } });

const api = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export const getData = () => dispatch => {
  api
    .get("/transactions")
    .then(res => {
      dispatch(setData(res.data));
    })
    .catch(error => console.log(error));
};
