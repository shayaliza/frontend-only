import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import DMs from "./DMs"
import { Outlet } from 'react-router-dom'
import { useTheme } from '../../DarkMode/ThemeProvider'

function MSLayout() {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <div className="fixed top-0 left-0 right-0 h-16 z-50">
        <Header />
      </div>
      <div className="flex flex-grow h-[calc(100vh-56px)] overflow-hidden pt-16">
        <Sidebar />
        <div className="flex-grow bg-transparent overflow-hidden">
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default MSLayout
