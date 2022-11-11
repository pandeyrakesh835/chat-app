import React from "react";
import '../src/App.css'
import {  Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join";
import Chat from "./component/Chat/Chat";


const App = () => {
  return (

      <Routes>
        <Route exact path="/" element={<Join />}/>
        <Route path="/chat" element={<Chat/>} />
      
      </Routes>
   
    
  );
};

export default App;
