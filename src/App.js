import Description from "./components/Description";
import NavBar from "./components/Navbar";
import Baseboard from "./components/baseboard";
import Card from "./components/card";


import CarContext from './context/Context'
import { useState } from "react";

function App() {
  const [user,setuser]=  useState('henrique')
  return (

    <>
    <CarContext.Provider value={{user,setuser}}>  
    
      <NavBar/>
      <Card/>
      <Description/>
      <Baseboard/>

    
    </CarContext.Provider>
   
   
    </>
  
  )

}

export default App;
