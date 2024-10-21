import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from "./Layout";
import Home from "./Home";
import Messages from "./Messages";
import Chat from "./Chat";
import Search from "./Search";
import Notification from "./Notification";
import Settings from "./Settings";
import Calendar from "./Calendar"
import Profile from "./Profile";

function Routing(){
    return (
      <Routes>
        <Route path="/managesnap" element={<Layout />}>
        <Route index element={<Navigate to="/channels" replace />} />
        <Route path="/channels" element={<Home/>}/>
        <Route path="/dms" element={<Messages/>}/>
        <Route path="/calendar" element={<Calendar/>}/>
        <Route path="/notifications" element={<Notification/>}/>
      <Route path="/settings" element={<Settings/>}/>
      </Route>
      <Route path="/chat/:type/:id" element={<Chat />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/search" element={<Search/>}/>
      </Routes>
    )
}

export default Routing;