import { createContext,useContext,useReducer } from "react";

const AppContext=createContext();
const initialState={
 queryL:"HTML",

}

const AppProvider=({children})=>{
 // const [state, dispatch] = useReducer(reducer, initialState);

 return (
  <AppContext.Provider value={'pokemon'}>
   {children}
  </AppContext.Provider>
 )
}

const useGlobalContext=()=>{
 return  useContext(AppContext);
}
export {AppContext,AppProvider,useGlobalContext};

