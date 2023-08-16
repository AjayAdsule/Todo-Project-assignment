/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react"

const TodoApp= createContext()
const reducerFunction=(state,action)=>{
    if(action.type === "Login"){
        return{
            ...state ,
            user:action.payLoad
        }
    }
}
const Context = ({children}) => {
  const {state,dispatch} = useReducer(reducerFunction,{
    loginUser:{}
  })
  return (
    <>
      <TodoApp.Provider value={{state,dispatch}}>
        {children}
      </TodoApp.Provider>
    </>
  )
}

export default Context;

export const TodoAppState=()=>{
  return  useContext(TodoApp);
}