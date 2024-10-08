import React from "react";
import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from './pages/Login.js';
import Navi from './components/Navi.js';
import Sidebar from "./components/Sidebar.js";
import Dashboard from './pages/Dashboard.js';
import Client from "./pages/Client.js";
import Admin from "./pages/Admin.js";
import Request from "./pages/Request.js";
import Ongoing from "./pages/Ongoing.js";
import Service from "./pages/Service.js";
import Complete from "./pages/Complete.js";
import Searchreq from "./components/Searchreq.js";
import Message from "./pages/Message.js";
import Adminregister from "./pages/Adminregister.js";
import Tab from "./components/Tab.js";



function App(){
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/navi" element={<Navi/>}></Route>
      <Route path="/sidebar" element={<Sidebar/>}></Route>
      <Route path="/dashboard" element={<Dashboard/>}></Route>
      <Route path="/client" element={<Client/>}></Route>
      <Route path="/admin" element={<Admin/>}></Route>
      <Route path="/request" element={<Request/>}></Route>
      <Route path="/ongoing" element={<Ongoing/>}></Route>
      <Route path="/service" element={<Service/>}></Route>
      <Route path="/complete" element={<Complete/>}></Route>
      <Route path="/searchreq" element={<Searchreq/>}></Route>
      <Route path="/message" element={<Message/>}></Route>
      <Route path="/register" element={<Adminregister/>}></Route>
      <Route path="/tab" element={<Tab/>}></Route>
      
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;