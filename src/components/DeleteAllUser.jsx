import React from "react";
import { useDispatch , useSelector} from "react-redux";
import { deleteUsers } from "../store/slices/UserSlice";


export const DeleteAllUser = () => {
  const dispatch = useDispatch();  //its fro calling the functions presented in the userSlice or createSlice reduxtoolkit

  const data =useSelector((state) => {
    return state.users
  })
  const deleteAllUsers = () =>{
    dispatch(deleteUsers())
  }
  return <div className="btn" onClick={deleteAllUsers}>DeleteAllUser</div>;
};
